import {useState} from "react";
import styles from './Tab.module.css';

export const Tab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="container">
            <div className="tab-block">
                <button  className={toggleState === 1 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(1)}>tab-1</button>
                <button  className={toggleState === 2 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(2)}>tab-2</button>
                <button  className={toggleState === 3 ? "tab active-tab" : "tab"}
          onClick={() => toggleTab(3)}>tab-3</button>
            </div>
            <div className="content-tab">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h2>First Tab</h2>
                    <hr/>
                    <p>Примечательно, какие грандиозные преграды стоят на пути к близости между людьми
                        и как они рассыпаются от одного легчайшего прикосновения. Достаточно взять другого
                        человека за руку определенным образом, даже просто определенным образом заглянуть
                        ему в глаза, и мир вокруг вас навеки преобразится.</p>
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>Second Tab</h2>
                    <hr/>
                    <p>Так бывало всегда. Стоило мне с великим трудом навести порядок в своей вселенной
                        и начать в ней жить, как она взрывалась, снова рассыпаясь вдребезги.</p>
                </div>
                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h2>Third Tab</h2>
                    <hr/>
                    <p>Иные люди могут, сами того не зная, годами служить источником света в жизни других
                        людей, в то время как их собственная жизнь идет другими, скрытыми от глаз путями.
                        И точно так же человек может стать демоном, раковой опухолью для кого-то, 
                        кого он едва помнит, а может быть, и вообще не знал лично.</p>
                </div>
            </div>
        </div>




        
    )
}
