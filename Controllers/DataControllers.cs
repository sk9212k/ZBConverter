using System;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ZEDIBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public DataController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpPost("processEdiFile")]
        public async Task<IActionResult> ProcessEdiFile([FromBody] object ediFileData)
        {
            // Generate a unique transaction ID
            var transactionId = Guid.NewGuid().ToString();

            // Set the Azure Function URL
            var functionUrl = "<Azure_Function_URL>";

            // Serialize the EDI data
            var content = new StringContent(JsonSerializer.Serialize(ediFileData), Encoding.UTF8, "application/json");

            // Forward data to Azure Function for processing
            var response = await _httpClient.PostAsync(functionUrl, content);

            if (response.IsSuccessStatusCode)
            {
                // Return the transactionId for tracking
                return Ok(new { transactionId });
            }

            // Handle failed request to Azure Function
            return StatusCode((int)response.StatusCode, "Failed to process EDI file. Please contact Sohail.khan@zirconblue.com");
        }
    }
}
