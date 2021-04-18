import { Card } from "react-bootstrap";
export const noMathes = (filterHouse) => {
  if (filterHouse.length === 0) {
    return (
      <div className="not-match">
        <Card
          bg="warning"
          text={"warning" === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2 "
        >
          <Card.Header className="text-center">No Maches</Card.Header>
          <Card.Body>
            <Card.Text>
              It does not look like there is any matches for your search
              <span style={{ fontSize: "80px" }} className="text-center">
                &#128523;
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
};