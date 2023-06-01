import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import  "./news.css";

const News = () => {
  const blogData = [
    {
      title: "تاثيرات موسم كأس العالم علي الاسواق التجارية مع تطبيقات لاستثمار الموسم",
      date: "2023-05-28",
      image: "images/football-background-grass-with-trophy.jpg",

    },
    {
      title: "واقع اداره بيانات التسويق لرقم في العالم العربي و 5 تطبيقات عمليه لاستثمارها في تعزيز النمو",
      date: "2023-05-28",
      image: "images/marketing-ideas-share-research-planning-concept.jpg",
    },
    {
      title: "دراسة علي تأثير الجمعة البيضاء علي السلوك الشرائي و 10 استراتيجيات لزيادة مبيعات الموسم ",
      date: "2023-05-12",
      image: "images/black-friday-concept-with-products-falling-into-cart.jpg",
    },
  ];

  return (
    <div>
      <section id="blog" className="block blog-block blog">
        <Container>
          <div className="title mt-4">
            <h2 className="text">احدث دراسات السوق</h2>
          </div>
          <Row className="row-cols-1 row-cols-md-3 g-4">
            {blogData.map((blog) => (
              <Col key={blog.title}>
                <Card className="my-card" style={{ height: "100%" }}>
                  <div className="card-img-wrapper">
                    <Card.Img src={blog.image} alt="Card image" style={{ height: '300px' }} />                  </div>
                  <Card.Body>
                    <time className="text-start d-block text-center">
                      {blog.date}
                    </time>
                    <Card.Title className=" text-end title">
                      {blog.title}
                    </Card.Title>
                    <Card.Text className="text-end">{blog.overview}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <a href="#a" className="btn btnMore">
        Read More
      </a>
    </div>
  );
};

export default News;