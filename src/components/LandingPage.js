import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import TweenMax from 'gsap/TweenMax';
import '../css/Home.css';

// SVG Square
class Square extends Component {
  componentDidMount() {
    // Random Colour with Random Alpha
    function randomRgbaString() {
      const red = Math.floor(Math.random() * 255);
      const green = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      return `rgba(${red},${green},${blue},${1})`;
    }

    const paths = document.querySelectorAll('.swirly__path');
    for (let i = 0; i < paths.length; i++) {
      const length = paths[i].getTotalLength();
      paths[i].style.strokeDasharray = length;
      paths[i].style.strokeDashoffset = length;
      paths[i].style.stroke = randomRgbaString();
    }
  }

  render() {
    return (
      <svg width="800px" height="558px" viewBox="0 0 341 238" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Group" transform="translate(1.000000, 1.000000)" stroke="#979797">
            <path d="M318.321721,103.883981 C317.515783,127.799177 300.142188,103.600376 312.292424,97.8683559 C316.858012,95.7144848 320.99804,96.1401342 325.218205,98.7999966 C339.005982,107.49008 315.113897,128.971355 305.272893,116.174997 C303.32244,113.638803 302.582788,110.369007 301.237736,107.466012" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-2" transform="translate(315.318970, 108.318970) rotate(-135.000000) translate(-315.318970, -108.318970) " />
            <path d="M19.3844203,87.9767768 C27.6602993,94.5855722 13.5789866,92.1772042 14.8961391,87.5763862 C17.9926764,76.7601714 36.9574945,91.1427485 22.0211391,96.0080268 C19.7148129,96.7592756 17.0860829,96.7880606 14.7457484,96.150605 C6.63694558,93.9419452 13.1962675,76.4477228 28.3414516,82.1291206 C30.4798964,82.9313133 31.3902469,85.627264 32.2984828,87.7228706 C32.8526808,89.0015923 32.7990827,90.5194109 32.5738734,91.8947456 C32.3726234,93.1237629 31.8918913,94.3853556 31.0562953,95.3088081 C22.0425291,105.270302 -1.48486858,98.902151 0.0738734358,118.064667 C0.269286296,120.466991 1.57122822,123.069531 3.59340469,124.381074 C10.6423565,128.952883 28.9385153,125.267542 18.7535609,114.195527 C14.1726202,109.215608 2.10612749,115.758332 6.51918594,120.175996 C8.49434488,122.153216 15.0499047,124.213239 16.1910609,119.148652 C17.0169475,115.483269 9.11544284,113.195815 12.4762172,118.703339" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-3" />
            <path d="M16.5772675,222.763569 C16.3598168,216.915452 15.8747238,212.300532 16.03017,207.723178 C16.1809711,203.282607 16.9346017,198.877391 19.1202362,193.415912 C21.3756043,187.780184 34.6667541,184.936553 35.7491425,193.00185 C38.5287297,213.713635 17.8211713,198.503265 25.2276581,194.081928 C34.0245491,188.830583 30.6921541,206.836063 27.4366425,196.318256" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-4" transform="translate(26.003874, 205.381784) rotate(-118.000000) translate(-26.003874, -205.381784) " />
            <path d="M292,27.2268698 C314.632098,16.9168055 346.724553,44.7039849 338.013672,63.5315573 C330.973706,78.7476378 302.217839,72.1873235 304.269531,54.1409323 C306.167226,37.4490811 327.836369,48.5788037 329.355469,59.8577291 C330.435407,67.8759925 315.119142,65.3476756 311.892578,62.2561666 C303.346235,54.0675504 316.130678,48.3256695 321.009766,56.2913229 C327.369136,66.6737039 306.098413,53.2970866 317.037109,58.0530416" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-5" />
            <path d="M268,40.7639583 C282.549605,50.3586147 294.302017,38.0959055 281.546875,28.9397396 C275.150156,24.3479116 269.250293,37.9886132 277.988281,39.6467708 C283.145073,40.6253454 284.683833,34.931654 281.642578,31.0354427 C280.159394,29.135307 275.049922,32.6074949 278.667969,34.9045833" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-6" />
            <path d="M184.821651,203.158008 C180.68363,202.967904 176.493103,201.903641 172.407589,202.587696 C160.333464,204.609316 175.596185,225.138523 187.848995,223.154102 C191.343184,222.588196 194.750832,221.258326 197.813839,219.48418 C208.661002,213.201319 218.234512,204.770729 229.405636,199.08379 C243.577743,191.869125 275.349471,192.499715 274.561886,215.167774 C274.198662,225.621969 254.598424,234.737759 247.516964,226.111133 C239.597848,216.464077 260.294065,210.657381 259.341182,221.74004 C259.251264,222.785852 257.897404,223.392324 256.905636,223.736133 C247.608881,226.958973 251.622744,214.761312 254.975948,221.074024" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-7" />
            <path d="M22.6305421,51.924519 C11.5343284,48.9746583 15.3415415,64.3215039 26.8337489,54.8486639 C30.2510441,52.0318429 32.4705335,48.1124611 33.8699305,43.9887037 C37.2615018,33.9943865 41.0468957,7.34779159 58.8196833,12.7039742 C63.1044326,13.9952685 67.4960169,17.557453 69.6394214,21.5876897 C73.9782714,29.7460158 72.7543297,52.914697 57.2590668,46.631294 C47.1925917,42.5492904 44.6040027,20.7131236 58.445618,20.611634 C69.5544328,20.5301819 73.1923597,39.3234822 61.3375852,41.0752848 C53.872267,42.1784491 49.2789514,27.1920005 57.1772819,26.6650562 C65.1082004,26.1359378 64.7377878,39.020445 58.3638331,31.7022007" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-8" />
            <path d="M224.720801,28.3092303 C235.020803,6.41987161 268.909949,28.0254594 246.736502,48.7992047 C239.552767,55.5294649 220.750676,47.3729016 226.530041,37.2571036 C230.565933,30.1929597 248.973432,25.9691517 246.923326,38.4255713 C245.843991,44.9835944 228.505912,45.3041119 232.034786,36.9588412 C233.795271,32.7955488 244.897326,35.8506178 237.549363,38.7123621" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-9" transform="translate(239.418061, 35.206316) rotate(-150.000000) translate(-239.418061, -35.206316) " />
            <path d="M119.6875,38.3144531 C116.248471,23.862803 108.447157,46.7720352 125.091797,41.5976563 C135.773982,38.2768472 145.301753,31.9431749 155.753906,27.9570313 C159.299534,26.6048331 163.107849,25.6938904 166.902344,25.6523438 C176.866268,25.5432469 182.766304,25.6368733 187.808594,34.046875 C188.696741,35.5282098 189.687824,37.9093794 188.517578,39.1796875 C184.060752,44.0175953 163.630622,47.1850079 165.693359,34.953125 C166.658211,29.2316264 180.397964,30.8608711 178.791016,36.796875 C177.248796,42.4937716 166.96019,36.3396454 172.681641,35.9589844" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-10" />
            <path d="M201.849609,44.1914062 C204.768461,37.1253182 196.795511,13.0036541 189.138672,23.7734375 C187.060296,26.6967924 193.495518,32.9537689 192.435547,26.9472656" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-11" />
            <path d="M212.794922,45.0097656 C204.662594,34.0609376 195.560302,-9.42563703 224.328125,2.38671875 C233.654371,6.21616863 226.720976,18.828681 219.142578,16.4179688 C207.017373,12.5609027 213.191412,7.78810671 220.242188,10.0761719" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-12" />
            <path d="M81.5078125,45.2519531 C83.593099,42.5735677 86.4191553,40.333597 87.7636719,37.2167969 C90.0197795,31.9867858 89.9610461,25.9670342 92.1035156,20.6894531 C95.8728927,11.4042833 113.51793,-1.25578875 122.191406,10.6230469 C125.52523,15.1889142 123.384254,18.5987375 118.734375,20.5273437 C109.554758,24.3347263 103.412186,12.720517 114.871094,15.4726562" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-13" />
            <path d="M32.3261719,138.150391 C20.9602727,139.760194 15.383496,137.899305 8.50976562,148.707031 C4.28651796,155.347342 12.7987131,162.063674 18.6308594,161.322266 C34.172867,159.346495 25.8201596,139.793987 14.0800781,149.978516 C4.82671818,158.005812 31.6853071,153.464242 18.0585937,151.851562" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-14" />
            <path d="M51.4453125,205.023438 C50.8626302,208.584635 49.1672752,212.137611 49.6972656,215.707031 C51.2993341,226.496765 75.3145862,232.935736 80.6992187,223.052734 C86.1519253,213.044789 64.7716785,204.804819 60.7285156,214.544922 C58.4372088,220.06475 68.5138286,225.796692 71.3359375,218.361328 C72.4407702,215.450443 66.1449796,211.992203 67.3867187,217.3125" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-15" />
            <path d="M101.021484,213.476563 C87.2638049,214.358131 96.6705436,208.795951 101.378906,209.990234 C110.548639,212.316151 119.273097,218.635559 129.140625,214.416016 C129.664332,214.192069 129.913494,213.443528 129.878906,212.875 C129.072248,199.615547 113.497065,215.911566 124.195312,211.263672" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-16" />
            <path d="M154.886719,204.070312 C161.860806,210.974777 179.187419,238.784353 155.617188,236.316406 C138.03296,234.475231 161.771211,213.69808 163.929688,226.21875 C165.197419,233.572477 147.137555,232.500019 156.794922,227.587891" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-17" />
            <path d="M147.199219,204.892578 C143.141711,208.704825 138.949984,223.456548 150.548828,218.453125 C151.164578,218.187507 157.586331,211.443094 151.462891,210.417969 C147.345796,209.728726 144.999388,216.44627 150.460938,214.945312" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-18" />
            <path d="M289.289062,203.908203 C299.882492,216.096866 318.6802,241.323396 324.992188,210.089844 C325.573146,207.215091 324.695453,204.116333 323.574219,201.40625 C316.891757,185.254381 297.921383,204.65911 307.4375,212.263672 C311.008881,215.117649 320.532558,211.768524 316.947266,205.804688 C316.098811,204.393354 311.496717,202.584715 312.351562,203.992188" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-19" />
            <path d="M302.818359,187.746094 C307.018536,186.054426 322.935252,176.751497 327.833984,185.0625 C333.080558,193.963637 310.13713,194.764944 313.472656,188.455078 C314.959735,185.641949 326.464337,185.238539 316.650391,189.751953" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-20" />
            <path d="M307.306641,175.929688 C341.522939,165.558761 287.015732,124.68795 320.042969,128.886719 C326.341749,129.687486 333.641787,136.138511 323.917969,139.681641 C319.790788,141.185487 311.062727,136.111781 319.041016,133.810547" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-21" />
            <path d="M34.3828125,169.234375 C30.2646357,173.835572 8.48625267,185.295054 6.65625,176.296875 C5.55008907,170.857848 13.7964028,167.481731 17.5527344,170.478516 C22.133634,174.133137 8.24194085,178.747958 12.5214844,171.691406" stroke="#000" strokeWidth="1" className="swirly__path" id="Path-22" />
          </g>
        </g>
      </svg>
    );
  }
}

// Navigation Button - Appears after animation
class NavButton extends Component {
  componentDidMount() {
    const { elTime, easing } = this.props;
    TweenMax.fromTo(this.navbutton, elTime, {
      opacity: 0,
      scale: 0,
    }, {
      opacity: 1,
      scale: 1,
      delay: 4.8,
      ease: `${easing}.easeOut`
    });
  }

  render() {
    return (
      <span className="nav__button" ref={c => this.navbutton = c}>Find out more</span>
    );
  }
}

//Home Page
class LandingPage extends Component {
  render() {
    return (
      <div className="home">
        <Square />
        <div className="home__content">
          <h2>Hej Hej</h2>
          <h1><span className="name">My name is Zara and I am a </span>
            <span className="role"> Front End Developer</span>
            <span className="place">in Brighton</span></h1>
        </div>
        <TransitionGroup className="home__button" onClick={() => this.props.goToHome()}>
          {<NavButton elTime={.4} easing="Power1" />}
        </TransitionGroup>
      </div>
    );
  }
}

export default LandingPage;
