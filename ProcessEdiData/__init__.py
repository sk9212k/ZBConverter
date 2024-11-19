import azure.functions as func
import uuid
from azure.storage.blob import BlobServiceClient
from lxml import etree

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        # Parse incoming EDIFACT file data
        edi_data = req.get_json()
        edi_content = edi_data.get('ediContent', '')

        # Load the XSLT stylesheet (convert XML to JSON)
        xslt_path = "transform_to_json.xsl"
        xslt_tree = etree.parse(xslt_path)
        transform = etree.XSLT(xslt_tree)

        # Parse EDIFACT data to XML (simulated here)
        edi_xml = etree.XML(edi_content.encode('utf-8'))

        # Apply XSLT to transform XML to JSON
        json_result = transform(edi_xml)

        # Generate a unique transaction ID
        transaction_id = str(uuid.uuid4())

        # Store the resulting JSON in Azure Blob Storage
        blob_service_client = BlobServiceClient.from_connection_string("<your_connection_string>")
        container_name = "processed-files"
        blob_client = blob_service_client.get_blob_client(f"{transaction_id}.json")

        # Upload JSON result
        blob_client.upload_blob(str(json_result), overwrite=True)

        # Respond with transaction ID
        return func.HttpResponse(
            json.dumps({"transactionId": transaction_id}),
            status_code=200,
            mimetype="application/json"
        )
    except Exception as e:
        return func.HttpResponse(
            f"Error processing EDI file: {str(e)}",
            status_code=500
        )
