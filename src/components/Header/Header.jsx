import React from "react";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <svg width="41" height="30" viewBox="0 0 41 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.3774 14.5444L40.3746 14.4976C40.3721 14.4664 40.3709 14.4351 40.3673 14.4042C40.3604 14.342 40.3535 14.2823 40.3421 14.2197C40.3008 13.9817 40.2282 13.7503 40.1259 13.5315C39.935 13.136 39.6745 12.7782 39.3568 12.4751C39.0729 12.2015 38.7628 11.9565 38.4308 11.7437C37.7954 11.3317 37.149 11.0327 36.5302 10.7836C35.9114 10.5346 35.3149 10.3448 34.7623 10.1856C34.2098 10.0263 33.6995 9.90115 33.246 9.80161C32.7926 9.70206 32.3956 9.62364 32.0677 9.56351C31.7399 9.50338 31.4831 9.46153 31.3071 9.43268L31.0382 9.39205C31.019 9.38927 30.9994 9.39389 30.9835 9.40498C30.9676 9.41607 30.9565 9.4328 30.9525 9.45177C30.9485 9.47074 30.9518 9.49053 30.9618 9.50714C30.9719 9.52374 30.9878 9.5359 31.0065 9.54117L31.2694 9.61186C31.4396 9.65859 31.6899 9.72807 32.0064 9.82192C32.3229 9.91578 32.7056 10.034 33.1396 10.1807C33.5735 10.3274 34.0594 10.5033 34.5795 10.7142C35.0996 10.925 35.653 11.1729 36.2136 11.4699C36.7743 11.7669 37.3436 12.1135 37.8584 12.5324C38.1136 12.7371 38.3479 12.9666 38.558 13.2174C38.7612 13.4636 38.9237 13.7293 39.0094 13.9934C39.052 14.1194 39.0773 14.2507 39.0846 14.3835C39.087 14.4152 39.0846 14.4473 39.0846 14.4785C39.0846 14.4944 39.0846 14.5102 39.0825 14.5257V14.5492C39.0825 14.5444 39.0825 14.5683 39.0825 14.5399V14.5488V14.5663C39.0764 14.6035 39.0661 14.6398 39.0521 14.6748C39.0082 14.7772 38.9487 14.8722 38.8757 14.9564C38.7815 15.0674 38.6776 15.1699 38.5653 15.2627C38.3075 15.4729 38.0315 15.6597 37.7405 15.821C37.4399 15.992 37.1234 16.1484 36.802 16.2939C36.1576 16.5844 35.4933 16.8322 34.8412 17.0525C34.189 17.2727 33.5471 17.4632 32.9344 17.6327C32.3217 17.8021 31.737 17.9484 31.1958 18.0755C30.3507 18.2742 29.6112 18.4262 29.0241 18.5391C28.9733 17.3912 28.8089 16.2511 28.5333 15.1355C27.9625 12.8257 29.1928 9.90846 29.1928 9.90846C29.1928 9.90846 32.3948 4.44574 29.7892 1.76862C26.3637 -1.75117 22.5046 1.06978 22.5046 1.06978C21.8139 1.41554 21.1618 1.55206 20.541 1.55287C19.9201 1.55369 19.2688 1.41554 18.5773 1.06978C18.5773 1.06978 14.7175 -1.75117 11.2927 1.76862C9.73783 3.3662 10.251 5.95353 10.9177 7.78391C10.2408 7.96106 9.33071 8.21825 8.27677 8.5762C7.69779 8.77285 7.07533 8.99997 6.42444 9.26285C5.77354 9.52573 5.09339 9.82355 4.40268 10.1669C3.68271 10.5213 2.98781 10.9244 2.32283 11.3736C1.96981 11.614 1.63306 11.8774 1.31479 12.1622C0.98975 12.458 0.67446 12.7875 0.409552 13.2052C0.268872 13.426 0.159484 13.6653 0.0845108 13.9162C0.0446989 14.0535 0.0184347 14.1943 0.00609458 14.3367L0.00243771 14.3916L0 14.4558C0 14.5135 0 14.4964 0 14.5574C0.00406301 14.6232 0.00650071 14.6886 0.0154393 14.7536C0.0452369 15.0082 0.11118 15.2571 0.211277 15.4931C0.306018 15.7138 0.425126 15.9233 0.566384 16.1176C0.827684 16.4697 1.13704 16.7834 1.48544 17.0496C1.80473 17.2955 2.14256 17.5164 2.49591 17.7103C3.14431 18.0619 3.8205 18.3596 4.51767 18.6005C5.17303 18.8325 5.80036 19.0129 6.38178 19.1624C6.96319 19.3119 7.49992 19.4281 7.97651 19.5224C8.4531 19.6166 8.87037 19.6885 9.21289 19.7442C9.5554 19.7999 9.82681 19.8381 10.0113 19.8661L10.2932 19.9067C10.3131 19.9104 10.3336 19.9061 10.3502 19.8947C10.3669 19.8834 10.3783 19.8658 10.382 19.846C10.3857 19.8262 10.3814 19.8057 10.37 19.789C10.3586 19.7724 10.3411 19.7609 10.3213 19.7572L10.0446 19.691C9.86459 19.6471 9.6009 19.5825 9.26652 19.4943C8.93213 19.4062 8.52827 19.2944 8.06874 19.1559C7.60921 19.0173 7.09362 18.8508 6.54145 18.6496C5.98929 18.4485 5.39771 18.2129 4.79436 17.9301C4.16619 17.6413 3.56271 17.3016 2.98997 16.9143C2.69931 16.7154 2.42451 16.4942 2.16802 16.2529C1.92191 16.025 1.70897 15.7638 1.53541 15.4768C1.45895 15.346 1.39735 15.2069 1.35177 15.0624C1.31155 14.9306 1.29034 14.7938 1.28879 14.6561C1.28879 14.6228 1.29082 14.5895 1.29163 14.5566C1.29163 14.5667 1.29407 14.5017 1.2961 14.5106C1.29715 14.5075 1.29797 14.5042 1.29854 14.5009L1.30179 14.4818C1.31268 14.4279 1.32859 14.3751 1.34933 14.3241C1.40158 14.2001 1.46988 14.0834 1.55248 13.9772C1.73328 13.7395 1.98641 13.5075 2.26391 13.2958C2.55078 13.0808 2.85141 12.8848 3.16387 12.7091C3.79663 12.3556 4.45269 12.0456 5.12752 11.7811C5.79061 11.517 6.4476 11.2935 7.07777 11.0961C7.70794 10.8986 8.3109 10.7357 8.872 10.5963C9.99177 10.318 10.9376 10.1405 11.5991 10.0275C11.7137 10.008 11.8197 9.99094 11.9168 9.9755C12.0972 10.4293 13.0675 13.0329 12.5486 15.1335C11.5585 19.1376 12.0521 23.2091 13.6887 27.0617C14.7634 29.5905 16.4166 32.3107 16.7884 26.731C17.1378 21.4921 17.935 18.2754 20.5398 18.2754C23.1746 18.2754 23.9417 21.4921 24.2911 26.731C24.6629 32.3107 26.3161 29.5905 27.3908 27.0617C28.2371 25.0708 28.7779 23.0186 28.966 20.9485L29.0879 20.9156C29.74 20.7376 30.668 20.4731 31.7695 20.1139C32.3201 19.9344 32.9141 19.7308 33.5382 19.5004C34.1622 19.2701 34.8164 19.0129 35.4884 18.7228C36.1604 18.4327 36.8454 18.1076 37.5301 17.7269C37.8722 17.5356 38.2139 17.33 38.5503 17.0988C38.9018 16.8622 39.231 16.5942 39.5339 16.298C39.6989 16.134 39.8485 15.9553 39.9809 15.7641C40.1343 15.5454 40.2492 15.302 40.3205 15.0445C40.3592 14.8987 40.379 14.7485 40.3795 14.5976L40.3774 14.5444ZM14.0064 9.73538C13.9807 9.76608 13.9502 9.79255 13.9162 9.81379C13.8313 9.86624 13.7291 9.88286 13.632 9.86C13.5349 9.83715 13.4508 9.77669 13.3982 9.6919C13.3681 9.64396 13.3385 9.59561 13.3096 9.54767C12.9019 8.88802 12.5724 8.18306 12.328 7.44709C12.2091 7.08276 12.1194 6.70955 12.0598 6.33098C11.9237 5.45418 11.9741 4.61232 12.2098 3.82816C12.614 2.48087 13.4258 1.77431 13.4604 1.74506C13.5364 1.68473 13.6328 1.65615 13.7294 1.66528C13.826 1.67441 13.9153 1.72054 13.9786 1.79403C14.042 1.86752 14.0745 1.96267 14.0693 2.05956C14.0641 2.15646 14.0216 2.24758 13.9508 2.31388C13.9386 2.32485 13.2503 2.93755 12.9175 4.08494C12.5978 5.18805 12.6953 6.39314 13.2072 7.68234C13.3484 8.03473 13.5112 8.37803 13.6948 8.71028C13.8002 8.90341 13.9142 9.09803 14.0369 9.29413C14.0791 9.36146 14.0989 9.44043 14.0934 9.51971C14.088 9.59899 14.0575 9.6745 14.0064 9.73538Z" fill="#0098FF"/>
</svg>
<h2>
Dental
</h2>
</div>

<nav>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
</nav>
<div className="headerBtn">
    <button>Log in</button>
    <button>Sign up</button>
</div>
        </div>
    )
}

export default Header