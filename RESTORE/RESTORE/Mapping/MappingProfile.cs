using AutoMapper;
using RESTORE.DTO;
using RESTORE.Entities;

namespace RESTORE.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ProductDTO,Product>().ReverseMap();
            CreateMap<UpdateProductDTO,Product>().ReverseMap();
            CreateMap<User, UpdateProfile>().ReverseMap();
        }
    }
}
