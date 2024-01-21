/* Open Api 호출 영역 */
/* 오늘의 책 부분 */
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {query: "새해", size:8},
    headers:{Authorization: "KakaoAK c8ffc3ab6fd3e90abbd76c604e685526"}
}).done(function(data){
    console.log(data);
    for(var i in data){
        if(data.length > 0){
            $(".today-book-mini-thumb").eq(i).append("<a href='#'><img alt='today-thumb-mini' src='"+data[i].thumbnail+"'/></a>");
            $(".today-book-thumbnail").eq(i).append("<img alt='today-bigThumbnail' src='"+data[i].thumbnail+"'/>");
            $(".today-short-intro > a").eq(i).append(data[i].contents);
            $(".today-long-intro > a").eq(i).append(data[i].contents);
            $(".today-book-author").eq(i).append(data[i].authors);
            $(".today-book-price").eq(i).append(data[i].price);
        }
    }
});
/* 지금, 이 책 */

/* 화제의 책 */

/* 멀티셀렉트 도서 */

/* 멀티셀렉트 중고샵*/

/* 멀티셀렉트 eBook */

/* 멀티셀렉트 웹소설/코믹 */

/* 멀티셀렉트 CD/LP */

/* 멀티셀렉트 DVD/BD */

/* 멀티셀렉트 문구/GIFT */

/* 멀티셀렉트 티켓 */

/* 카드섹션 상단 */

/* 카드섹션 하단 */
