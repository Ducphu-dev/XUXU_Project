
import { useEffect, useState } from 'react';
import Arrow_icon from '../../Assets/images/HorizontalCard/arrow_icon.svg';
import '../../Assets/style/_reset.scss';
import HorizontalCard from '../HorizontalCard/HorizotalCard';
import './TrendingTop.scss';





function TrendingTop(props:any) {
     const {TopTrendingList,btn,numberLimited} = props
   
    const SortHeader = [
        {
            sort_name:"웹툰",
            sort_key: 0,
            sort_active: true
        },
        {
            sort_name:"웹소설",
            sort_key: 1,
            sort_active: false
        }
    ]
    const SortTrending = [
        {
            sort_name:"월",
            sort_key: "all",
            
        },
        {
            sort_name:"화",
            sort_key: 2,
            
        },
        {
            sort_name:"수",
            sort_key: 3,
            
        },
        {
            sort_name:"목",
            sort_key: 3,
            
        },
        {
            sort_name:"금",
            sort_key: 4,
            
        },
        {
            sort_name:"토",
            sort_key: 5,
            
        },
        {
            sort_name:"일",
            sort_key: 6,
            
        },
        {
            sort_name:"완결",
            sort_key: 7,
            
        },
    ]
    const [filterTrending, setfilterTrending] = useState<any>([])
    const [toggleTabs, setToggleTabs] = useState(0)
    const [toggleTabsHead, setToggleTabsHead] = useState(0)

    const changeTabHead = (index:any,items:any) =>{
        setToggleTabsHead(index)
        // changTopTrending(index)
    }

    const changeTabRecommend = (index:any,items:any) =>{
        setToggleTabs(index)
        FilterTrending(items.sort_key)
    }
    
    
    useEffect(() => {
        FilterTrending(0)
        // changTopTrending(0)
    }, [])


    function FilterTrending (items:any){
        const filter = TopTrendingList
        .filter((product: { Card_category: any; })=>{
            if(items === 0 || items === "all"){
                return product
            }
            if(items !== 0){

                return product.Card_category === items
            }
        })
        setfilterTrending(filter)
    }


    let TopTrendingSection 
    // function changTopTrending (index:any){
    //     if(index === 0){
    //         console.log(index)
    //         TopTrendingSection =
    //     } if(index === 1){
    //         TopTrendingSection =  <HorizontalCard
    //         HorizontalCard={TopTrendingList}
    //         cols={"horizontal-5"}
    //         numberLimited={numberLimited}
    //         toggleTabs={toggleTabs}/>
    //     }
    // }
    

    
    return (
        <div className='block-toptrending'>
            <div className='block-toptrending_header'>
                <div className="block-toptrending_header-right">
                    <div className="header-title">
                        <h3>요일 연재 TOP</h3>    
                    </div>
                    <div className="header-amount">
                        <h3>({TopTrendingList.length})</h3>    
                    </div>
                </div>
                <ul className="block-toptrending_header-left">
                    {
                        SortHeader.map((items:any, index:any)=>{
                            return (
                                <li onClick={()=>changeTabHead(index,items)} className= {`header-sort_items  ${ toggleTabsHead === index ? "active":"" }`} key={index}>
                                    <p>{items.sort_name}</p>
                                    <div className='dot'></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#999" fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-.5 4c-.828 0-1.5.672-1.5 1.5v4c0 .139.019.273.053.4-.128.485-.004 1.023.372 1.405l3.812 3.868.018.018c.557.545 1.451.536 1.997-.022.558-.57.557-1.483-.003-2.051l-3.277-3.327c.018-.094.028-.191.028-.291v-4c0-.828-.672-1.5-1.5-1.5z"/>
                                    </svg>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='block-toptrending_nav'>
                <ul className='trending_nav'>
                    {
                        SortTrending.map((items:any, index:any)=>{
                            return (
                                <li onClick={()=>changeTabRecommend(index,items)} className= {`trending_nav-items ${ toggleTabs === index ? "active":"" }`} key={index}>
                                    <p>{items.sort_name}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <HorizontalCard
            HorizontalCard={filterTrending}
            cols={"horizontal-5"}
            numberLimited={numberLimited}
            toggleTabs={toggleTabs}
            />
           
            {
                btn ? 
                <div className='block-toptrending_btn'>
                    <div className="toptrending_btn">
                        <div className='toptrending_btn-decs' >수요 연재 더보기</div>    
                        <img src={Arrow_icon} />
                    </div>
                </div>
                : 
                ""
            }
            
        </div>
        
    );
}

export default TrendingTop;
