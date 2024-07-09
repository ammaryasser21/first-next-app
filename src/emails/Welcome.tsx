import {
  Html,
  Head,
  Container,
  Column,
  Row,
  Section,
  Tailwind,
  Body,
  Img,
  Heading,
  Hr,
  Text,
  Link,
} from "@react-email/components";
import * as React from "react";

export default function Welcome() {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="my-auto mx-auto font-sans">
          <Container className=" my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="text-center mt-[32px] mb-[32px]">
              <Link href="#" target="_self" className="no-underline text-gray-400 ">
                View in browser
              </Link>
            </Section>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Row>
                <Column align="left">
                  <Img
                    src="/static/images/ACME.png"
                    alt="Vercel"
                    className="w-24 cursor-pointer"
                  />
                </Column>
                <Column align="right">
                  <Img
                    src="/static/images/f.png"
                    className="no-underline w-[24px] inline-block ml-[10px]  cursor-pointer"
                    alt="Facebook"
                  />
                  <Img
                    src="/static/images/t.png"
                    alt="Twitter"
                    className="no-underline w-[24px] inline-block ml-[10px] cursor-pointer"
                  />
                  <Img
                    src="/static/images/i.png"
                    alt="Instagram"
                    className="no-underline w-[24px] inline-block ml-[10px] cursor-pointer"
                  />
                </Column>
              </Row>
            </Section>
            <Section className="mt-[32px]">
              <Img src="/static/images/1.png" alt="Vercel" className="cursor-pointer max-w-[465px] w-full " />
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section className="mt-[32px]">
              <Heading className="text-black text-[33px] font-normal p-0 my-[20px] mx-0">
              Unleash Timeless Comfort in Your Home
              </Heading>
              <Text className="text-gray-400 text-[14px]">
              Elevate Your Space with Impeccable Quality, Versatile
              Styles, and Personalized Service.
              </Text>
            </Section>
            <Section className="mt-[32px]">
              <Row>
                <Column align="left" className="w-[50%] align-top px-3 py-5 ">
                  <Img src="/static/images/2.png" className=" mb-2 w-[50px]" alt=""/>
                  <Heading className="mb-1 text-[18px] text-gray-700">Elevate Your Living Space</Heading>
                  <Text className="text-gray-400 text-[17px]" >
                    Discover comfort and style with our exquisite furniture collection at Acme. Transform your living space into a haven of timeless comfort with our range of plush sofas, elegant dining sets, cozy armchairs, and functional storage solutions.
                  </Text>
                </Column>
                <Column align="left" className="w-[50%] align-top px-3 py-5">
                  <Img src="/static/images/3.png" className=" mb-2 w-[50px] " alt=""/>
                  <Heading className="mb-1 text-[18px] text-gray-700">Impeccable Quality</Heading>
                  <Text className="text-gray-400 text-[17px]" >
                    Quality is our priority. Our furniture is meticulously crafted by skilled artisans, ensuring durability and elegance. From solid wood frames to carefully selected upholstery fabrics, each piece is thoughtfully designed to deliver unmatched quality and long-lasting performance.
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column align="left" className="w-[50%] align-top px-3 py-5">
                  <Img src="/static/images/3.png" className="mb-2 w-[50px]" alt=""/>
                  <Heading className="mb-1 text-[18px]   text-gray-700">Versatile Styles</Heading>
                  <Text className="text-gray-400 text-[17px]">
                    Express your unique style with our diverse range of furniture options. Whether you prefer contemporary minimalism, rustic charm, or timeless elegance, our selection offers something to complement every taste. Choose from sleek modern lines to ornate detailing and enhance your interior decor.
                  </Text>
                </Column>
                <Column align="left" className="w-[50%] align-top px-3 py-5">
                  <Img src="/static/images/4.png" className="align-middle mb-2 w-[50px]" alt=""/>
                  <Heading className="mb-1 text-[18px] text-gray-700">Personalized Service</Heading>
                  <Text className="text-gray-400 text-[17px]">
                    Experience personalized service at Acme. Our friendly team is dedicated to assisting you in finding the perfect furniture pieces. From fabric selection to space planning, we&apos;re here to ensure your complete satisfaction. Indulge in the luxury of personalized furniture shopping.
                  </Text>
                </Column>
              </Row>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Section className="mt-[32px]">
              <Row>
                <Column align="left" className="w-[50%] align-bottom">
                  <Img src="/static/images/ACME.png" className=" mb-2 w-24" alt="Logo" />
                  <Text className="text-[14px] text-gray-400" >Acme corporation</Text>
                  <Text className="text-[12px] text-gray-400" >Think different</Text>
                </Column>
                <Column align="left" className="w-[50%] align-bottom">
                  <Img src="/static/images/f.png"  alt="Facebook" className="no-underline w-[24px] inline-block mr-[10px] cursor-pointer"/>
                  <Img src="/static/images/t.png"  alt="Twitter" className="no-underline w-[24px] inline-block mr-[10px] cursor-pointer"/>
                  <Img  src="/static/images/i.png" alt="Instagram" className="no-underline w-[24px] inline-block mr-[10px] cursor-pointer"/>
                  <Text className="text-[12px] text-gray-400" >123 Main Street Anytown, CA 12345</Text>
                  <Text className="text-[12px] text-gray-400" >mail@example.com +123456789</Text>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
