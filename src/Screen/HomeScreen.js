import Banner from '../Banner';
import './HomeScreen.css'
import Nav from '../Nav';
import Row from '../Row';
import requests from '../Request';
const HomeScreen = () => {
    return (
        <div className="HomeScreen">


            {/* Nav */}
            <Nav />
            {/* Banner */}
            <Banner />

            {/* Row */}

            <Row
                title="Netflix Original" fetchUrl={requests.fetchNetflixoriginal}
                isLargeRow
            />

            <Row
                title="Trending Now" fetchUrl={requests.fetchTrending}
                
            />
            <Row
                title="Top Rated" fetchUrl={requests.fetchTopRated}
            />
            <Row
                title="Action Movies" fetchUrl={requests.fetchActionMovies}
            />
            <Row
                title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}
            />
            <Row
                title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}
            />
            <Row
                title="Documentry Movies" fetchUrl={requests.fetchDocumentaries}
            />

        </div>
    )
}

export default HomeScreen;