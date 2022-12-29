import React, { useEffect, useState } from 'react'
import { GetNews } from './service/GetNews'
import Moment from 'react-moment';
import alanBtn from '@alan-ai/alan-sdk-web';

const NewsData = () => {
    const [newsData, setNewsData] = useState([])
    const [selectOption, setSelectOption] = useState("general");
    const getNewsData = async () => {
        let respose = await GetNews(selectOption);
        setNewsData(respose.data.articles);
    }
    const alankey = 'bbf1f8f52230dc55cd80f8bf261e39192e956eca572e1d8b807a3e2338fdd0dc/stage';
    useEffect(() => {
        alanBtn({
            key: alankey,
            onCommand: (commandData) => {
                setSelectOption(commandData.data)
            }
        });
    }, []);
    useEffect(() => {
        getNewsData()
    }, [selectOption])
    const selectCategory = (e) => {
        setSelectOption(e.target.value)
    }
    return (
        <>
            <div className='main'>
                <h1>News</h1>
                <div className='select'>
                    <label for="cars">Choose a Category:</label>

                    <select
                        name="category"
                        className='select-box'
                        onChange={selectCategory}
                        value={selectOption}
                    >
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="business">Business</option>
                        <option value="sports">Sports</option>
                    </select>
                </div>
                <div className="grid-main">
                    {
                        newsData
                            ?
                            newsData.map((news, index) => {
                                return (
                                    <div className='grid-child' key={index}>
                                        <img className='news-image' src={news?.urlToImage} alt="Loading..." />
                                        <p className='news-title' >{news?.title}</p>
                                        <p>{news?.description}</p>
                                        <p>Author: {news?.author}</p>
                                        <p>Date: <Moment>{news?.publishedAt}</Moment></p>

                                        <a href={news?.url} target='_blank'>Read More..</a>
                                    </div>
                                )
                            })
                            :
                            <h2>Loading...</h2>
                    }
                </div>
            </div>
        </>

    )
}

export default NewsData
