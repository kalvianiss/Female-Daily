//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NavigationBar from "./Components/NavigationBar";
import Banner from "./Components/Banner";
import BannerKedua from "./Components/BannerKedua";
import BannerKetiga from "./Components/BannerKetiga";
import CardEditor from "./Components/CardEditor";
import BoxArticle from "./Components/BoxArticle";
import LatestReview from "./Components/LatestReview";
import LatestArticle from "./Components/LatestArticle";
import LatestVideo from "./Components/LatestVideo";
import api from './data/api.json';
import Row from 'react-bootstrap/Row';
import TopBrands from "./Components/TopBrands";
import About from "./Components/about";

function App() {
  // axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp').then(res => {
  //   let editor = e
  //   console.log(res.data.editor);
  // });
  // console.log(api.editors_choice);

  return (
    <div className="App">
    <div> 
        <NavigationBar />
        <br/>
        <Banner />
        <br/>
        <BannerKedua />
    </div>
    <br/>
    <div className="text-left-editor">
      <h5><strong>Editor's Choice</strong></h5>
      <h5><strong>Currented with love</strong></h5>
    </div>
    <br/>
    <Row xs={1} md={6} className="g-4">
      {api.editors_choice.map(person => <CardEditor data={person} />)}
    </Row>
    <br/>
      <BoxArticle />
    <br/>
      <BannerKetiga />
    <br/><br/>
    <div className="text-left-editor">
      <h5><strong>Latest Articles</strong></h5>
      <h5><strong>So you can make better purchase decision</strong></h5>
    </div>
    <br/>
    <Row xs={1} md={4} className="g-4">
      {api.latest_articles.map(articles => <LatestArticle data={articles} />)}
    </Row>
    <br/>
    <br/>
    <div className="text-left-editor">
      <h5><strong>Latest Reviews</strong></h5>
      <h5>So you can make better purchase decision</h5>
    </div>
    <br/>
    <Row xs={1} md={6} className="g-4">
      {api.latest_review.map(review => <LatestReview data={review} />)}
    </Row>
    <br/>
    <div className="text-left-editor">
      <h5><strong>Latest Video</strong></h5>
      <h5>Watch and learn, ladies</h5>
    </div>
    <LatestVideo />
    <br/>
    <div className="text-left-editor">
      <h5><strong>Top Brands</strong></h5>
      <h5>We All know and love</h5>
    </div>
    <TopBrands />
    <br/>
    <div className="text-left-editor">
      <h5><strong>Female Daily-Find everything you want to know about beauty on female daily</strong></h5>
      <h5>Products Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorial, Beauty Workshop, Anything!</h5>
      <h5>We are here to be your friendly solution to all things beauty, inside and out</h5>
    </div>
    <br/>
    <container>
    <hr
        style={{
          color: '#000000',
          backgroundColor: '#000000',
          height: .5,
          borderColor : '#000000'
        }}
    />
    </container>
    <br/>
    <About />
    </div>
  );
}

export default App;
