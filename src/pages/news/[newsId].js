import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react'

const NewsIdDetails = ({ news }) => {
    return (
        <div>
            <h1>Title: {news.title}</h1>
        </div>
    )
}

export default NewsIdDetails;


NewsIdDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/news");
    const newses = await res.json();

    const paths = newses.map((news) => ({
        params: { newsId: news.id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
    const data = await res.json();
    console.log(data)

    return {
        props: {
            news: data
        }
    }
}
