import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import  "./Blog.css";

const Blog = () => {
     const blogData = [
       {
         title: "نصائح لذياده وتحسين اداء اعضائك",
         overview:
           "تُعدّ ممارسة التمارين الرياضية من أفضل الطرق للحفاظ على الصحة العامة للجسم، والرفاهية، وطولة العمر، حيث تساعد على الحفاظ على صحة جهاز القلب والأوعية الدموية، تحسن الوضائف الإدراكية، وتحسن الحالة المزاجية، وجودة النوم، بالإضافة إلى تحسن أداء الجهاز العضلي الهيكلي، والجهاز التنفسي، والتمثيل الغذائي في الجسم.",

         date: "2023-05-28",
         image: "Images/istockphoto-1409751960-612x612.jpg",
       },
       {
         title: "نصائح لذياده وتحسين اداء اعضائك",
         overview:
           "تُعدّ ممارسة التمارين الرياضية من أفضل الطرق للحفاظ على الصحة العامة للجسم، والرفاهية، وطولة العمر، حيث تساعد على الحفاظ على صحة جهاز القلب والأوعية الدموية، تحسن الوضائف الإدراكية، وتحسن الحالة المزاجية، وجودة النوم، بالإضافة إلى تحسن أداء الجهاز العضلي الهيكلي، والجهاز التنفسي، والتمثيل الغذائي في الجسم.",

         date: "2023-05-28",
         image: "Images/istockphoto-1409751960-612x612.jpg",
       },
       {
         title: "نصائح لذياده وتحسين اداء اعضائك",
         overview:
           "تُعدّ ممارسة التمارين الرياضية من أفضل الطرق للحفاظ على الصحة العامة للجسم، والرفاهية، وطولة العمر، حيث تساعد على الحفاظ على صحة جهاز القلب والأوعية الدموية، تحسن الوضائف الإدراكية، وتحسن الحالة المزاجية، وجودة النوم، بالإضافة إلى تحسن أداء الجهاز العضلي الهيكلي، والجهاز التنفسي، والتمثيل الغذائي في الجسم.",

         date: "2023-05-12",
         image: "Images/istockphoto-1409751960-612x612.jpg",
       },
     ];
    return (
      <div>
        <section id="blog" className="block blog-block blog">
          <Container>
            <div className="title mt-4">
              <h2 className="text">أحدث المقالات </h2>
            </div>
            <Row>
              {blogData.map((blog) => {
                return (
                  <Col xs={12} md={6} lg={4} className="my-col">
                    <div className="holder">
                      <Card className="my-card">
                        <div className="card-img-wrapper">
                          <Card.Img src={blog.image} alt="Card image" />
                        </div>
                        <Card.Body>
                          <time className="text-start d-block text-center">
                            {blog.date}
                          </time>
                          <Card.Title className=" text-end title">
                            {blog.title}
                          </Card.Title>
                          <Card.Text className="text-end">
                            {blog.overview}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Container>
          
        </section>
        <a href="#a" className="btn btn-outline btnMore w-70">
          Read More 
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    );
}

export default Blog;
