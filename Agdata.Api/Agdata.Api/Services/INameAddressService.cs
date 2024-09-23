using Agdata.Api.Models;

namespace Agdata.Api.Services
{
    public interface INameAddressService
    {
        NameAddressDto SaveNameAndAddress(NameAddressDto nameAddress);
    }
}
