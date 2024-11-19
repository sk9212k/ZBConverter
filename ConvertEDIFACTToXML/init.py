import azure.functions as func
import xml.etree.ElementTree as ET

def parse_edifact_to_xml(edifact_data):
    # Simulated parsing logic for demonstration
    root = ET.Element("EDIFACT")
    message = ET.SubElement(root, "Message")
    message.text = "Parsed EDIFACT data"
    return ET.tostring(root, encoding="utf-8")

def main(req: func.HttpRequest) -> func.HttpResponse:
    edifact_data = req.get_body().decode("utf-8")
    xml_data = parse_edifact_to_xml(edifact_data)
    return func.HttpResponse(xml_data, mimetype="application/xml")
