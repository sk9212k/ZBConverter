using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ZEDIBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataRetrievalController : ControllerBase
    {
        private readonly BlobServiceClient _blobServiceClient;

        public DataRetrievalController(BlobServiceClient blobServiceClient)
        {
            _blobServiceClient = blobServiceClient;
        }

        [HttpGet("getProcessedFile")]
        public async Task<IActionResult> GetProcessedFile(string transactionId)
        {
            // Get the container client
            var containerClient = _blobServiceClient.GetBlobContainerClient("processed-files");

            // Get the blob client using the transactionId (used as the file name)
            var blobClient = containerClient.GetBlobClient($"{transactionId}.json");

            if (await blobClient.ExistsAsync())
            {
                // Download the content of the blob (processed data)
                var downloadContent = await blobClient.DownloadContentAsync();
                return Ok(downloadContent.Value.Content.ToString());
            }

            // If file does not exist
            return NotFound("Processed file not found");
        }
    }
}
