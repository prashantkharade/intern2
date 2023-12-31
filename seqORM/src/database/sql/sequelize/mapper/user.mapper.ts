import { UserDetailsDto } from 'domain.types/user/user.dto';
import User from '../models/user.model';

export class UserMapper {
    static toDetailsDto = async (entity: User): Promise<UserDetailsDto> => {
        if (entity === null) {
            return null;
        }

        const dto: UserDetailsDto = {
            id: entity.id,
            FirstName: entity.FirstName,
            Prefix: entity.Prefix,
            MiddleName: entity.MiddleName,
            LastName: entity.LastName,
            Email: entity.Email,
            CreatedAt: entity.createdAt,
            UpdatedAt: entity.updatedAt,
            DeletedAt: entity.deletedAt,
            RoleId: entity.RoleId,
        };

        return dto;
    };
}