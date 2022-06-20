import React from 'react';


import { Background, Back2, NFT, Detail, Name, Line, Group1, Group2, Line2, Price, Iconprice, Line3, Button, Buttonbuy, Price2, Owner, Twitter, Ico1, Ico2 } from './homeElement.js'

const Home = () => {
  return (
    <div>
      <Background>
        <div>
          <Back2>
            <div>
              <NFT src='https://airnfts.s3.amazonaws.com/nft-images/20220608/Baby_Batman__1654701866795.png' />
            </div>
            <Detail>
              <Name>BATMAN BOY</Name>
              <Line />
              <div style={{ marginTop: '30px' }}>
                <Group1>
                  <td style={{ paddingRight: '60px' }}>Created By</td>
                  <td>Owner Contact</td>
                </Group1>
                <Group2>
                  <Ico1 src='https://d1don5jg7yw08.cloudfront.net/200x200/profile-images/20220329/0x90A16971Cf13dCF6b9640C1882B859a3f947177B_1648555301846.jpeg' />
                  <Owner>Odin_</Owner>
                  <Ico2 src='https://www.superbikemag.com/wp-content/uploads/2021/03/twitter-icon.png' />
                  <Twitter href='Https://twitter.com/odin_creatures'>
                    @odin_creatures
                  </Twitter>
                </Group2>
                <Line2 />
                <Price>
                  <h1 style={{ fontFamily: 'monospace' }}>Curren Price</h1>
                </Price>
                <Price>
                  <h1>0.18</h1>
                  <Iconprice src='https://app.airnfts.com/coins/bnb.svg' />
                </Price>
                <Price2>$206.69</Price2>
                <Line3 />
                <Button>
                  <Buttonbuy>BUY</Buttonbuy>
                </Button>
              </div>
            </Detail>
          </Back2>
        </div>
      </Background>
    </div>
  );
};


export default Home;
