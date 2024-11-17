import azure.functions as func
import xml.etree.ElementTree as ET

def parse_tradacoms_to_xml(tradacoms_data):
    # Simulated parsing logic for demonstration
    root = ET.Element("TRADACOMS")
    message = ET.SubElement(root, "Message")
    message.text = "Parsed TRADACOMS data"
    return ET.tostring(root, encoding="utf-8")

def main(req: func.HttpRequest) -> func.HttpResponse:
    tradacoms_data = req.get_body().decode("utf-8")
    xml_data = parse_tradacoms_to_xml(tradacoms_data)
    return func.HttpResponse(xml_data, mimetype="application/xml")
