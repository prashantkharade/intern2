import { IUserRepo, UserFindOptions } from 'database/repository.interfaces/user.repo.intrerface';
import { UserDomainModel } from 'domain.types/user/user.domain.model';
import { UserDetailsDto } from 'domain.types/user/user.dto';
import { Op } from 'sequelize';
import { UserMapper } from '../mapper/user.mapper';
import User from '../models/user.model';

export class UserRepo implements IUserRepo {
    getById = async (userId: string): Promise<UserDetailsDto> => {
        const user: User = await User.findOne({
            where: {
                id: userId,
            },
        });

        const details: UserDetailsDto = await UserMapper.toDetailsDto(user);

        return details;
    };

    async getUserHashedPassword(userId: string): Promise<string> {
        const user: User = await User.findOne({
            where: {
                id: userId,
            },
        });

        return user.Password;
    }

    async findOneUser(options: UserFindOptions): Promise<UserDetailsDto> {
        const DeletedAt = options.isActive === true ? { DeletedAt: null } : { DeletedAt: { [Op.not]: null } };

        let findByEmail = {};
        if (options.email) {
            findByEmail = {
                Email: options.email,
            };
        }

        let findByUserId = {};
        if (options.userId) {
            findByUserId = {
                id: options.userId,
            };
        }

        const user: User = await User.findOne({
            where: {
                ...findByEmail,
                ...findByUserId,
                ...DeletedAt,
            },
        });

        const details: UserDetailsDto = await UserMapper.toDetailsDto(user);

        return details;
    }

    async findUsersByRoleId(roleid: string): Promise<UserDetailsDto[]> {
        const users: User[] = await User.findAll({
            where: {
                RoleId: roleid,
            },
        });

        const temp: Promise<UserDetailsDto>[] = users.map(async (user) => await UserMapper.toDetailsDto(user));

        const userDetailsDto: UserDetailsDto[] = await Promise.all(temp);

        return userDetailsDto;
    }

    async createUser(userDetails: UserDomainModel): Promise<UserDetailsDto> {
        const entity = {
            Prefix: userDetails.Prefix,
            FirstName: userDetails.FirstName,
            MiddleName: userDetails.MiddleName,
            LastName: userDetails.LastName,
            Email: userDetails.Email,
            Password: userDetails.Password,
            RoleId: userDetails.RoleId,
        };

        const user: User = await User.create(entity);
        const dto: UserDetailsDto = await UserMapper.toDetailsDto(user);

        return dto;
    }
}