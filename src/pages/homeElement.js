import styled from "styled-components";

export const Background = styled.div`
    display: flex;
    background-color: #BDC3C7;
    background-position: center;
    background-size: cover;
    align-content: center;
    justify-content: center;
    height: 1000px;
    @media screen and (max-width:830){
        
    }
    
`
export const Back2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    margin-top: 6rem;
    border: 1 #000;
    padding: 2.5rem;
    border-radius: 20px;
    width: 60rem;
    height: 30rem;
    padding-right: 1rem;
    @media screen and (max-width:1000px){
        width: 55rem;
        height: 30rem;
    }
    @media screen and (max-width:830px){
        flex-direction: column;
        justify-content: center;
        width: 30rem;
        height: 55rem;
    }
    
`

export const NFT = styled.img`
    width: 25rem;
    border: 1px hidden #CACFD2;
    /* margin-left: -15rem; */
    border-radius: 20px;
    
`

export const Detail = styled.div`   
    
    margin-right: 6.5rem;
    margin-top: 2rem;
    /* justify-content: center; */
    @media screen and (max-width:830px) {
        display: flex;
        margin-right: 20px;
        align-items: center;
        flex-direction: column;
    }
`

export const Name = styled.text`
    display: flex;
    font-family: fantasy;
    font-size: 40px;
    justify-content: center;
    @media screen and (max-width:830) {
        display: flex;
        align-items:center ;
    }
`
export const Line = styled.div`
    border: 5px solid #000;
    border-radius: 10px;
    width: auto;
    @media screen and (max-width:830) {
        width: 10rem;
    }
`

export const Group1 = styled.tr`
    font-size: 15px;
`
export const Group2 = styled.tr`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    margin-top: 20px;
    
`

export const Owner = styled.td`
    padding-right: 20px;
    margin-right: 20px;
    margin-top: 10px;

`

export const Twitter = styled.a`
    /* margin-left: 30px; */
    text-decoration: none;
    padding-left: 20px;
    margin-left: -20px;
    margin-top: 10px;
`

export const Ico1 = styled.img`
    width: 30px;
    height: 40px;
    border: 1px hidden;
    border-radius: 10px;
    margin-right: 5px;
    margin-bottom: -10px;
    
`
export const Ico2 = styled.img`
    width: 30px;
    height: 40px;
    border: 1px hidden;
    border-radius: 10px;
    margin-left: 25px;

    
`

export const Line2 = styled.div`
    border: 1px solid #000;
    margin-top: 30px;
`


export const Price = styled.text`
    display: flex;
    justify-content: center;

`

export const Price2 = styled.text`
    display: flex;
    justify-content: center;
    color: #BDC3C7;
`

export const Iconprice = styled.img`
    padding-left: 5px;
    width: 30px;
`

export const Line3 = styled.div`
    border: 1px solid #000;
    margin-top: 15px;
    margin-bottom: 10px;
`

export const Button = styled.nav`
    display: flex;
    justify-content: center;
`

export const Buttonbuy = styled.button`
    background: #256ce1;
    width: 90px;
    height: 40px;
    border: 1px hidden;
    color: #fff;
    outline: none;
    border-radius: 20px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
    transition: all 0.2s ease-in-out;
    background: #58D68D;
    color: #fff;
    }
`