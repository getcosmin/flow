import { useEffect } from 'react';

export default function NavigationMain() {
    useEffect(() => {
        class AuthConnectModal {
            static button = document.querySelector('#navigation-connect');
            static widgets = document.querySelectorAll('.widget-container');
            static observe = () => {
                if (this.button) {
                    this.button.addEventListener('click', this.handleEvent);
                }
            };
            static handleEvent = (event) => {
                const target = event.target;
                target.ariaExpanded === 'true' ?
                    this.hideAccountWidget(target) :
                    this.showAccountWidget(target) ;
            };
            static hideAccountWidget(target) {
                target.ariaExpanded = 'false';
                this.widgets?.forEach((widget) => {
                    widget.classList.remove('widget-show');
                });
            }
            static showAccountWidget(target) {
                target.ariaExpanded = 'true'
                const targetWidget = target.dataset.widgetTarget;
                const selectWidget = document.querySelector(`${targetWidget}`)
                selectWidget.classList.add('widget-show');
            }
        }

        AuthConnectModal.observe();
    }, []);

    return (
        <>
        <nav className="navigation">
    <div className="wrapper">
        <div className="navbar-container">
            <div className="navbar-brand">
                <a href="https://flow.getcosmin.dev">
                    <svg className="main-logo" width="114" height="64" viewBox="0 0 114 64">
                        <path d="M20.7,13.2l-18.4,0C1,13.2,0,14.3,0,15.6v32.6c0,0.6,0.2,1.3,0.7,1.7c0.4,0.5,1,0.7,1.7,0.7c0,0,0,0,0.1,0   c0.7,0,1.3-0.2,1.7-0.7c0.5-0.4,0.7-1.1,0.7-1.7V33.8h13.6c0.6,0,1.2-0.2,1.7-0.7c0.5-0.4,0.7-1,0.7-1.6c0-0.6-0.2-1.3-0.7-1.7   c-0.4-0.4-1.1-0.7-1.7-0.7H4.8V17.8h15.9c0.6,0,1.2-0.2,1.7-0.6c0.5-0.4,0.7-1,0.7-1.6c0-0.7-0.2-1.3-0.7-1.7   C21.9,13.4,21.3,13.2,20.7,13.2z"/>
                        <path d="M33,11.1C33,11.1,33,11.1,33,11.1c-1.3,0-2.4,1.1-2.4,2.4v34.7c0,0.6,0.2,1.2,0.6,1.7c0.4,0.5,1,0.7,1.6,0.7   c0,0,0.1,0,0.1,0c0.6,0,1.2-0.3,1.7-0.7c0.4-0.4,0.7-1.1,0.7-1.7V13.5c0-0.6-0.2-1.2-0.7-1.7C34.2,11.4,33.6,11.1,33,11.1z"/>
                        <path d="M63.1,24.1c-4.3-2.5-9.7-2.5-14,0c-2.1,1.2-3.8,3-4.9,5.1c-1.2,2.3-1.9,4.8-1.8,7.4c0,2.6,0.6,5.1,1.8,7.4   c0.1,0.1,0.2,0.3,0.2,0.4c2.5,4.3,7.1,6.7,11.7,6.7c2.4,0,4.8-0.6,7-1.9c2.1-1.2,3.8-3,4.9-5.2c1.2-2.3,1.8-4.8,1.8-7.4   c0-2.6-0.6-5.2-1.8-7.4C66.8,27.1,65.1,25.3,63.1,24.1z M48.2,41.8c-0.8-1.6-1.2-3.4-1.2-5.1c0-1.8,0.4-3.6,1.2-5.2   c0.7-1.4,1.9-2.7,3.2-3.5c1.4-0.9,3-1.3,4.6-1.3c1.6,0,3.2,0.4,4.6,1.3c1.4,0.9,2.5,2.1,3.2,3.5c0.8,1.6,1.2,3.4,1.2,5.2v0   c0,1.8-0.4,3.6-1.2,5.1c-0.7,1.4-1.8,2.7-3.2,3.5c-2.8,1.7-6.4,1.7-9.2,0C50.1,44.5,49,43.3,48.2,41.8z"/>
                        <path d="M110,25.1c0-0.1,0-0.3,0-0.4c0-0.7-0.2-1.3-0.7-1.8c-0.4-0.4-1-0.6-1.6-0.6c-1-0.1-2,0.6-2.3,1.6l-6.1,18.2   L94,28.9c-0.1-0.5-0.4-0.8-0.8-1.1c-0.4-0.3-0.8-0.4-1.3-0.4c-1,0-1.9,0.6-2.2,1.5l-5.2,13.4L78.4,24c-0.1-0.5-0.4-1-0.9-1.2   c-0.4-0.2-0.9-0.4-1.3-0.4c-0.6,0-1.3,0.2-1.7,0.7c-0.4,0.4-0.7,1.1-0.7,1.7c0,0.3,0.1,0.7,0.2,0.9l8.1,23.3c0.2,0.5,0.5,1,1,1.2   c0.4,0.2,0.9,0.4,1.4,0.3c0.9,0,1.8-0.6,2.1-1.5L91.7,35l5.7,14.1c0.3,0.9,1.1,1.5,2,1.5c0.1,0,0.1,0,0.2,0c0.4,0,0.8-0.1,1.2-0.3   c0.4-0.3,0.8-0.7,1-1.2l7.9-23.4C109.9,25.5,110,25.3,110,25.1z"/>
                        <ellipse cx="110.5" cy="47" rx="3.5" ry="3.6"/>
                    </svg>
                </a>
            </div>
            <div className="navigation-menu">
                <a href="https://flow.getcosmin.dev">Home</a>
                <a href="https://flow.getcosmin.dev/software">Try Flow</a>
            </div>
            <div className="navigation-cta">
                <button className='navigation-link' aria-expanded="false" id="navigation-connect" data-widget-target="#widget-connect">
                    Connect
                    <svg height="24" width="24">
                        <path d="M5.85 17.1q1.275-.975 2.85-1.538Q10.275 15 12 15q1.725 0 3.3.562 1.575.563
                                2.85 1.538.875-1.025 1.363-2.325Q20 13.475 20 12q0-3.325-2.337-5.663Q15.325 4 12
                                4T6.338 6.337Q4 8.675 4 12q0 1.475.488 2.775.487 1.3 1.362 2.325ZM12 13q-1.475
                                0-2.488-1.012Q8.5 10.975 8.5 9.5t1.012-2.488Q10.525 6 12 6t2.488 1.012Q15.5
                                8.025 15.5 9.5t-1.012 2.488Q13.475 13 12 13Zm0 9q-2.075
                                0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825
                                2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35
                                2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075
                                22 12 22Zm0-2q1.325 0 2.5-.387 1.175-.388 2.15-1.113-.975-.725-2.15-1.113Q13.325 17
                                12 17t-2.5.387q-1.175.388-2.15 1.113.975.725 2.15 1.113Q10.675 20 12 20Zm0-9q.65 0
                                1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q12.65 8 12 8q-.65 0-1.075.425Q10.5 8.85
                                10.5 9.5q0 .65.425 1.075Q11.35 11 12 11Zm0-1.5Zm0 9Z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</nav>

<div className="widget-container wrapper" id="widget-connect">
    <div className="widget-modal">
        <header>
            <span className="mini-title">Connect</span>
            <span>Log into your account or create a new one.</span>
        </header>
        <div>
            <a role="button" className="button button-primary" href="https://flow.getcosmin.dev/account/login.html">
                Sign into account
            </a>
            <a role="button" className="button button-secondary" href="https://flow.getcosmin.dev/account/register.html">
                Create an account
            </a>
        </div>
    </div>
</div>
        </>
    );
}
