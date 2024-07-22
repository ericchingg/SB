import { Card, CardBody, CardTitle } from "reactstrap";

function RouteNotFound() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
            Hmmm. I cant seem to find what you want.
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default RouteNotFound;