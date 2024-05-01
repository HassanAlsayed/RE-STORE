using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RESTORE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ErrorsController : ControllerBase
    {
        [HttpGet("NotFound")]
        public IActionResult GetNotFound()
        {
            return NotFound();
        }

        [HttpGet("BadRequest")]
        public IActionResult GetBadRequest()
        {
            return BadRequest(new ProblemDetails{Title = "Bad Request"});
        }

        [HttpGet("ServerError")]
        public IActionResult GetServerError()
        {
            return StatusCode(500,"server problem");
        }

        [HttpGet("ValidationError")]
        public IActionResult GetValidationError()
        {
            ModelState.AddModelError("problem1", "This is the first problem");
            ModelState.AddModelError("problem2", "This is the second problem");
            return ValidationProblem();
        }

        [HttpGet("UnAuthorized")]
        public IActionResult GetUnAuthorized()
        {
            return Unauthorized();
        }
    }
}
