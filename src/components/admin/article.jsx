import React from "react";
import CardArticle from '../Cards/CardArticle';

const Article = () => {
    return (
        <>
            <div className="flex-1 ml-1/6 p-4 bg-[#F1F1FF] rounded-2xl">
                <div className="">
                    <button class="w-14 h-14 bg-[#27005D] text-white flex items-center justify-center rounded-3xl">
                        <svg class="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </button>
                    <CardArticle />
                </div>

            </div>
        </>
    );
}

export default Article;