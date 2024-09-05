import { Container } from '@/components/Container'
import { Title } from '@/components/Title'

const PricesPage = () => {
  return <Container className="mt-10">
    <Title size="lg">Акция: 2 занятия по цене 1!</Title>
    {/* <Unlimited /> */}
    <Title size="lg">Стоимость групповых занятий</Title>
    <div className="card">
      <span className="amount">1000 рублей</span> - разовое занятие.
    </div>
    <div className="card">
      <span className="amount">3200 рублей</span> - абонемент на 4 занятия в течение 1-го месяца
      <div className="text-sm text-[#5d616f]">{3200/4} руб. одно занятие</div>
    </div>
    <div className="card">
      <span className="amount">6000 рублей</span> - абонемент на 8 занятий в течение 1-го месяца
      <div className="text-sm text-[#5d616f]">{6000/8} руб. одно занятие</div>
    </div>
    <div className="card">
      <span className="amount">8400 рублей</span> - абонемент на 12 занятий в течение 2-х месяцев
      <div className="text-sm text-[#5d616f]">{8400/12} руб. одно занятие</div>
    </div>
    <div className="card">
      <span className="amount">15600 рублей</span> - абонемент на 24 занятия в течение 3-х месяцев
      <div className="text-sm text-[#5d616f]">{15600/24} руб. одно занятие</div>
    </div>

    <Title size="lg">Стоимость индивидуальных занятий</Title>
    <div className="card">
      <span className="amount">3500 рублей</span> - разовое занятие (<b>1</b> час).
    </div>
    <div className="card">
      <span className="amount">4300 рублей</span> - разовое занятие (<b>1.5</b> часа).
    </div>
    <div className="card">
      <span className="amount">13000 рублей</span> - абонемент на <b>4</b> занятия (по <b>1</b> часу) в течение 1-го месяца.
    </div>
    <div className="card">
      <span className="amount">
        16000 рублей
      </span> - абонемент на <b>4</b> занятия (по <b>1.5</b> часа) в течение 1-го месяца.
    </div>

    <Title size="lg">Способы оплаты</Title>
    <div className="card">
      <span className="amount">Наличный расчёт</span> - &nbsp;у&nbsp;администратора на стойке регистрации
    </div>
    <div className="box-border shadow-[inset_0_1px_1px_#e7eaf3,0_0_8px_#e7eaf3] text-[17px] mx-0 my-5 p-5 rounded-md background: #e7eaf3;">
        Оплачивая занятие, абонемент или услугу, клиент присоединяется к настоящему <a className="no-underline text-[#ffa727] opacity-80 hover:opacity-100 visited:text-[#9b6b6b]" href="/docs/public-offer-agreement__yoga-club-om.pdf">договору-оферте</a>
    </div>
  </Container>
}

export default PricesPage
