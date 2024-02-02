
import './App.css';
import styled from 'styled-components';
import img from './img.jpg';


const Main = styled.div`
display:flex;
flex-direction: column;
margin:5px;

`
const Heading = styled.div`
display:flex;
height: 150px;
width: 100%;
background-color:#00004d;
align-items:center;

`
const Profile = styled.div`

width: 80%;
`
const Skills = styled.div`

 display: flex;

`
const Additional = styled.div`

width: 100%;
`

const Relevant = styled.div`

width: 100%;
`
const Education = styled.div`
;

`
const Container = styled.div`
display: flex;

`
const Projects = styled.div`
display:flex;
flex-direction: column;
width: 100%;
`
const Contact = styled.div`

width: 100%;
`
const Image = styled.img`
height: 130px;
width: 135px;
padding:10px;
`
const Name = styled.div`
font-weight: bold;
font-size: 2rem;
color:white;
font-family:'Roboto';
`
const Title = styled.h2`
font-family:'Roboto';
`
const Text = styled.p`
font-family:'Roboto';
`
const Text2 = styled.p`
font-weight: bold;
color:#399cbd;
font-family:'Roboto';

`
const Footer = styled.div`
 background-color: #00004d;
 height: 50px;
 width:100%;
`

function App() {
  return (
    <Main>
      <Heading>
        <Image src={img} alt='my-image' />
        <Name>Ernest Kaburi Mwangi</Name>
      </Heading>
      <Profile>
        <Title>Profile</Title>
        <Text>
          A full stack developer experienced in bringing forth expertise in design, programming, testing and maintaining
          software systems. Equipped with a diverse and promising skill sets and proficient in various platforms and languages,
          Able to effectively self manage during independent project as well as colaborate as part of a productive team.
        </Text>
      </Profile>
      <Skills>
        <Relevant>
          <Title>Relevant Skills</Title>
          <Container>
            <Text2>-Programming </Text2>
            <Text>: Javascript, Python</Text>
          </Container>
          <Container>
            <Text2>-Web-Development </Text2>
            <Text>: HTML5, CSS3, ReactJs, Node.js</Text>
          </Container>
          <Container>
            <Text2>-Databases </Text2>
            <Text>:  MongoDB, MySQL</Text>
          </Container>
          <Container>
            <Text2>-Version Control </Text2>
            <Text>: Git, Github, Bitbucket</Text>
          </Container>
        </Relevant>
        <Additional>
          <Title>Additional skills</Title>
          <Text>-Microsoft365</Text>
          <Text>-Atlassian</Text>
          <Text>-Linux Operating System</Text>
        </Additional>
      </Skills>
      <Education>
        <Title>Experience</Title>
        <Text2>Software Engineer at Thunder Communications</Text2>
        <Text>- Worked productively with the product Team to understand requirements and business specifications.</Text>
        <Text>- Developed, implemented and maintained software systems</Text>
        <Text></Text>
        <Text2>Junior Developer at Icon Ltd.</Text2>
        <Text>- Effectively coded software changes and alterations based on design specifications</Text>
        <Text>- Succesfully worked at an independent level while also serving as an enthusiastic collaborator</Text>
      </Education>
      <Education>
        <Title>Education</Title>
        <Container>
          <Text2>Bachelor of Science in Information Technology :</Text2>
          <Text>Software Engineering</Text>
        </Container>
        <Container>
          <Text2>Pioneer International University :</Text2>
          <Text>Nairobi, Kenya</Text>
        </Container>
      </Education>
      <Container>
        <Projects>
          <Title>Projects</Title>
          <a href='https://thunder-industries.github.io/music-player/'>Music Player</a>
          <a href='https://thunder-industries.github.io/blackjack/'>Blackjack</a>
          <a href='https://thunder-industries.github.io/BMI/'>BMI App</a>
          <a href='https://thunder-industries.github.io/thundercomm/'>Thunder Communications Website</a>
        </Projects>
        <Contact>
          <Title>Contact</Title>
          <Container>
            <Text>Tel</Text>
            <Text>: +254 713 522 833</Text>
          </Container>
          <Container>
            <Text>Email</Text>
            <Text>: kaburiernest@gmail.com</Text>
            
          </Container>
          <Container>
            <Text>LinkedIn </Text>
            <Text><a href="https://www.linkedin.com/in/ernest-mwangi-1055a4269/">: LinkedIn</a>
            </Text>
          </Container>
        </Contact>
      </Container>
      <Footer></Footer>
    </Main>
  );
}

export default App;
