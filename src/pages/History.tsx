import { Container, Row, Col } from "react-bootstrap";

const History: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>History of the HD DVD Format</h1>
          <p>
            Like VHS and BetaMax, there was a format war between the winning
            Blu-ray and the now-defunct HD DVD. However, unlike the protracted
            war between VHS/BetaMax, the war between these two to become the
            default disc format for HD content was over in just two years
            (2006-2008). So what happened?
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        <h2>Launch</h2>
        <Col xs={12} md={2}>
          <figure>
            <img
              src="imgs/store.webp"
              className="img-fluid rounded-3"
              alt="Blu Ray and HD DVD sections of a Blockbuster"
            />
            <figcaption className="text-center">Blockbuster in 2006</figcaption>
          </figure>
        </Col>
        <Col xs={12} md={10}>
          <p>
            Supported principally by Toshiba, HD DVD had support from three of
            the Big Six movie studios. Paramount and Warner would offer
            non-exclusive support, with Universal exclusively backing HD DVD. As
            Sony was principally behind Blu-ray, it's no surprise they
            exclusively supported the format. However, both Disney and Fox would
            also exclusively support Blu-ray. Claiming its enhanced piracy
            features and ability to keep discs region locked as deciding factors
            for this position.
          </p>
          <p>
            With battlelines drawn, Toshiba released their first HD DVD player
            in Japan, in March 2006, for $899. Other players then came to the
            United States a month later, priced at $499 and $799. Launching with
            movies like The Last Samurai from Warner and Serenity from
            Universal.
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} md={9}>
          <h2>Late 2006 - 2007</h2>
          <p>
            By December, Toshiba sold roughly 120,000 HD DVD players in the US
            alone. Microsoft also released its external HD DVD drive for the
            Xbox 360 a month prior, which already sold an additional 150,000
            units due to its low price of $199.
          </p>
          <p>
            In August 2007, after supporting Blu-ray for over a year, Paramount
            announced exclusivity with HD DVD after receiving $150 million in
            cash and promotional guarantees from Toshiba. By November, 750,000
            HD DVD players had been sold. Increasing to 1 million just before
            2008. HD DVD would be dead less than a month later.
          </p>
        </Col>
        <Col xs={12} md={3}>
          <figure>
            <img
              src="/imgs/hd-dvd-drive.jpg"
              className="img-fluid rounded-3 mt-1"
              alt="Xbox 360 HD DVD promotional material"
            />
            <figcaption className="text-center">
              Xbox 360 External HD DVD Drive
            </figcaption>
          </figure>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <h2>Death of the Format</h2>
          <p>
            On January 4th 2008, citing consumer confusion and low software
            sales, Warner announced it would stop supporting HD DVD by June.
            This would be the start of an avalanche of terrible news for the
            format. To name just some, both Netflix and Best Buy followed soon
            after by removing their options to rent/buy HD DVDs. Then in early
            February, Wal-Mart announced it would also remove all HD DVD stock.
            This was the final nail in the coffin.
          </p>
          <p>
            On February 19 2008, Toshiba announced plans to discontinue
            development and manufacturing of HD DVD players, making the platform
            obsolete. Universal also announced a pivot to Blu-ray on the same
            day, with Microsoft discontinuing the Xbox 360 HD DVD player four
            days later. Toshiba later revealed that they lost $986 million on
            the format failure.
          </p>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col xs={12} md={8}>
          <h2>Deciding Factor</h2>
          <p>
            Sony's decision to put a Blu-ray drive in every PS3. By the time
            Toshiba ceded the market, 10.5 million consoles had been sold versus
            1 million HD DVD players. Therefore, even with Toshiba's desperate
            attempts to compete by slashing prices and buying Paramount
            exclusivity, there was realistically no way to win when Sony were
            selling over 10x PS3s than Toshiba were selling HD DVD players. Let
            alone the fact that Sony also sold standalone Blu-ray players.
          </p>
          <p>
            However, Sony's strategy came at a cost to their PlayStation
            business. The PS3's Blu-ray drive was the reason that each console
            was sold at a loss despite its astronomical $600 price tag. It also
            sold worse than the Xbox 360, as Microsoft hedged its bets and only
            created an optional, external HD DVD drive to keep their console
            $200 cheaper. It would take until 2010 for Sony to turn their gaming
            division around, despite the success of Blu-ray.
          </p>
        </Col>
        <Col xs={12} md={4} className="d-flex mt-4">
          <figure>
            <img
              src="/imgs/ps3-console.jpg"
              className="img-fluid rounded-3"
              alt="Original PS3 console with Blu-ray drive"
            />
            <figcaption className="text-center">
              The Original PS3 Console
            </figcaption>
          </figure>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <h2>Final Releases</h2>
          <p>
            Paramount's final releases were Into the Wild and Things We Lost in
            the Fire on March 4th 2008. Universal's would arrive 2 weeks later
            with Atonement on March 18th. Finally, despite being the first major
            studio to abandon HD DVD, Warner would be the last of the 3 to
            release content with P.S. I Love You and Twister on May 27.
          </p>
          <p>
            The final US HD DVD release was Bandai's Freedom: 6 in June. The
            final international release was Germany's steelbook of Death Proof
            by Senator Films in December. In the end, 475 HD DVDs released in
            the US, 236 in Toshiba's home country of Japan, and 232 in the UK.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
