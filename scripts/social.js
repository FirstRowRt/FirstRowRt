// 변수 초기화값
var pageNum = 0;
var count = 0;
var newCard = `<div class='container1'>
<div class='category_content'>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1686804022464-photo-bjzwq-543559-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>러닝</div>
                </div>
                <div class='socialingcard_info_subject'>7월3일 월요일 안양천 슬로우런&만보걷기함께하실분
                </div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>온라인 · </div>
                    <div>7.3(월) 오후 8:00</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1687678521480-photo-k5z48-464580-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>클래스기획전</div>
                    <div class='socialingcard_recommend'>추천</div>
                </div>
                <div class='socialingcard_info_subject'>밤편지에 맞춰 한국무용 원데이🌟</div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>관악구 · </div>
                    <div>7.4(화) 오후 7:30</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1681960214794-photo-hpqq7-548082-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>타코야끼파티</div>
                </div>
                <div class='socialingcard_info_subject'>🐙일본인 친구들과 함께 즐기는 핵존잼 & 핵꿀맛
                    타코야키 파티 🦑🥰 With 핵꿀맛 하이볼🍹</div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>마포구 · </div>
                    <div>7.5(수) 오후 8:00</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1679131681868-photo-y5xmr-486807-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>요리</div>
                    <div class='socialingcard_recommend'>추천</div>
                </div>
                <div class='socialingcard_info_subject'>따듯한 음식 한끼 [퇴근하고 오늘 뭐먹지?]🙋
                </div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>마포구 · </div>
                    <div>7.5(수) 오후 8:00</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1688031429890-photo-d3yxr-56296-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>테마파크</div>
                </div>
                <div class='socialingcard_info_subject'>파라다이스시티 씨메르로 당일 피서 가요~</div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>강서구 · </div>
                    <div>7.6(목) 오전 11:30</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1687848491303-photo-kf1sq-30236-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>전시</div>
                    <div class='socialingcard_recommend'>추천</div>
                </div>
                <div class='socialingcard_info_subject'>[7/6 청담] 이벤트⭐️ 도슨트와 갤러리투어 &
                    칵테일 한 잔</div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>강서구 · </div>
                    <div>7.6(목) 오전 11:30</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1685952339545-photo-fc0dt-417243-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>소개팅</div>
                </div>
                <div class='socialingcard_info_subject'>💚러브캐처 EP164💚</div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>중구 · </div>
                    <div>7.6(목) 오후 7:30</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
    <div>
        <a href='#' class='item'>
            <div><img
                    src='http://images.munto.kr/production-socialing/1682011773831-photo-zg2yx-529935-0?s=384x384'
                    alt=''></div>
            <div class='category_content_card_list'>
                <div class='category_content_card'>
                    <div class='socialingcard_tag'>소울메이트</div>
                    <div class='socialingcard_recommend'>추천</div>
                </div>
                <div class='socialingcard_info_subject'>[PREMIUM] 운명의 소울메이트 찾기 -★
                </div>
                <div class='socialingcard_info_describe'>
                    <div>소셜링 ·</div>
                    <div>온라인 · </div>
                    <div>7.6(목) 오후 9:00</div>
                </div>
                <div class='socialingcard_info_participants'>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </a>
    </div>
</div>
</div>`;

$(window).scroll(function () {
    console.log("-----스크롤이 움직이면 실행-----");
    var scrT = $(window).scrollTop();
    if (scrT > 900 && count < 1) {
        console.log("-----스크롤이 특정 높이 이상이 되면 실행-----");
        $("#swiper-slide" + pageNum).append(newCard);
        console.log("-----해당 Grid에서 Content append-----");
        count += 1;
        console.log("-----count값 +1-----");
    }
});
$(".socialing_category_item").on("click", function () {
    console.log("-----categoty item click-----");
    $(".container1").remove();
    console.log("-----append된 Content노드 제거-----");
    count = 0;
    console.log("-----count값 초기화-----");
    clickItem = this;
    $(".socialing_category_item").parent().children().each(function (idx, item) {
        if (clickItem == item) {
            console.log("현재 Grid창 index번호를 저장");
            return pageNum = idx;
        }
    });
    console.log(pageNum);
});


