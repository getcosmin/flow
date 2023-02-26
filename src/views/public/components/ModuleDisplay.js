import SectionWrapper from '../../../components/sub-components/SectionWrapper';
import ModuleDisplayBody from './ModuleDisplayBody';
import dbDisplayProducts from '../../../assets/db/dbDisplayProducts';
import { useState } from 'react';

export default function ModuleDisplay({ content }) {

        // SPLIT CLASS AND REFACTOR IT!
        class TabPannels {
            static selectTab(selectedTab) {
                selectedTab.classList.add('tab-active');
            }
            static handleClick(event) {
                const tabList = [
                    { selectID: document.querySelector('#productivity') },
                    { selectID: document.querySelector('#tracking') },
                    { selectID: document.querySelector('#performance') },
                ];
                tabList.forEach((tab) => {
                    tab.selectID.classList.remove('tab-active');
                    tab.selectID.classList.add('tab-hide');
                });
                switch (event.target.innerText) {
                    case 'Productivity':
                        TabPannels.selectTab(tabList[0].selectID);
                        break;
                    case 'Tracking':
                        TabPannels.selectTab(tabList[1].selectID);
                        break;
                    case 'Performance':
                        TabPannels.selectTab(tabList[2].selectID);
                        break;
                }
            }
        }

    return (
        <SectionWrapper main="display" wrap="display-products wrapper">
            <div className="display-nav">
                <button className="display-nav-active" onClick={TabPannels.handleClick}>
                    Productivity
                </button>
                <button onClick={TabPannels.handleClick}>
                    Tracking
                </button>
                <button onClick={TabPannels.handleClick}>
                    Performance
                </button>
            </div>
                <div className="display-container">
                    { dbDisplayProducts.map((display) => {
                        return (
                          <ModuleDisplayBody
                              key={display.id}
                              content={{...display}}
                          />
                        );
                    })

                    }
                </div>
        </SectionWrapper>
    );
}