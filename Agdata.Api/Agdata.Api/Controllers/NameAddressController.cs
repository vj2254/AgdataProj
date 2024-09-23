using Agdata.Api.Models;
using Agdata.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Agdata.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NameAddressController : ControllerBase
    {
        private readonly INameAddressService _nameAddressService;

        public NameAddressController(INameAddressService nameAddressService)
        {
            _nameAddressService = nameAddressService;
        }

        [HttpPost]
        public IActionResult SubmitNameAddress([FromBody] NameAddressDto nameAddress) 
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = _nameAddressService.SaveNameAndAddress(nameAddress);
            return Ok(result);
        }
    }
}
