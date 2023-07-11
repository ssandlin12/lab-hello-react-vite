import Card from 'react-bootstrap/Card';

function PreviewCard({img, title, text}) {
  return (
    <Card style={{ width: '12rem' }} className="m-5 border-0">
      <Card.Img variant="top" src={img || "holder.js/100px180"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PreviewCard;
