using System.ComponentModel.DataAnnotations;

namespace Agdata.Api.Models
{
    public class NameAddressDto
    {
        [Required]
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
