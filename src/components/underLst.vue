    <template>
 <section class="end__footer">
    <div class="end"></div>
        <div class="end__items">
            <div class="end__item">
                <h2>Жакшы Жол</h2>
                <p>2023, Все права защищены</p>
                
            </div>
            <div class="end__item">
                <ul class="end__it">
                    <li>Обо мне</li>
                    <li>Методичка</li>
                    <li>Видеоуроки</li>
                    <li>Отзывы</li>
                    <li>Контакты</li>
                </ul>
            </div>
            <div class="end__item">
                <button>Связаться</button>
            </div>
        </div> 

 </section>

</template>

<script>
export default {

}
</script>

<style>
/* --------------- end__footer----------------- */
.end{
    margin: 20px 0px 50px 0px;
    border-bottom: 3px solid #032660;
    margin-top: 140px;

}

.end__items{
    display: flex;
    justify-content: space-around;
}

.end__item{
   align-items: center;
}

.end__it{
    display: flex;
    align-items: center;
    gap: 20px 100px;
    flex-flow: wrap;
    width: 75%;
    height: 19vh;
    margin: 0 auto;
}

li{
    list-style: none;
}

.end__item p{
    padding: 60px 0;
}

.end__item h2{
    font-weight: 700;
    font-size: 32px;
    color: #032660;
}

.end__item button{
    border: 3px solid #032660;
    border-radius: 8px;
    padding: 10px 27px;
    font-weight: 500;
    font-size: 18px;
    color: #000
}

/* @media (max-width: 768px) { 
  .footer { 
    flex-direction: column; 
    align-items: center; 
  } 
  .footer__inner { 
    font-size: 22px; 
  } 
  .footer__text { 
    font-size: 18px; 
  } 
  .footer__block-2 { 
    width: 100%; 
    padding-left: 2%; 
  } 
  .footer__text_2 { 
    min-width: 100%; 
    max-width: 100%; 
  } 
  .btn { 
    width: 200px; 
  } 
  .end__it { 
    width: 90%; 
    height: auto; 
  } 
} */
</style>



