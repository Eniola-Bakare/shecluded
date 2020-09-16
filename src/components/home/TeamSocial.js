import React, {useState} from 'react';

const TeamSocial = () => {
    const [open, setOpen] =  useState(false)
    return ( 
        <div>
            <div onClick={() => setOpen(!open)} className="cursor">
                {
                    open? (
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d)">
                            <ellipse cx="17.6" cy="16.6442" rx="15.6" ry="15.7047" fill="#EC008C"/>
                            </g>
                            <path d="M20.8501 13.3721L14.3501 19.9157" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.3501 13.3721L20.8501 19.9157" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                            <filter id="filter0_d" x="0" y="0.939453" width="35.2" height="35.4094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                            </filter>
                            </defs>
                            </svg>
                    ): (
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                        <ellipse cx="17.6" cy="16.6441" rx="15.6" ry="15.7047" fill="white"/>
                        </g>
                        <path d="M17.6001 12.8271V20.4614" stroke="#EC008C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.8083 16.6445H21.3917" stroke="#EC008C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                        <filter id="filter0_d" x="0" y="0.939453" width="35.2" height="35.4094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                        </filter>
                        </defs>
                        </svg>

                    )
                }
            </div>
            {
                open? (
                    <div>
                        <div>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<ellipse cx="17.6" cy="16.5231" rx="15.6" ry="15.7047" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2574 23.6499H15.2188V16.1594H13.7002V13.5785H15.2188V12.0288C15.2188 9.9236 16.0755 8.6709 18.5119 8.6709H20.5395V11.2528H19.2723C18.324 11.2528 18.2611 11.6133 18.2611 12.2867L18.2571 13.5785H20.5535L20.2847 16.1594H18.2571L18.2574 23.6499Z" fill="#EC008C"/>
<defs>
<filter id="filter0_d" x="0" y="0.818359" width="35.2" height="35.4094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

                        </div>
                        <div>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<ellipse cx="17.6" cy="16.4029" rx="15.6" ry="15.7047" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6859 11.9283C23.3049 11.52 23.78 10.8725 24.0029 10.1015C23.4232 10.4803 22.7829 10.7544 22.0995 10.9027C21.5542 10.26 20.7748 9.85938 19.9124 9.85938C18.2576 9.85938 16.917 11.3386 16.917 13.1628C16.917 13.422 16.9417 13.6743 16.9931 13.9153C14.5034 13.7772 12.2957 12.4634 10.8169 10.4632C10.5589 10.9529 10.4114 11.52 10.4114 12.1249C10.4114 13.2708 10.9404 14.2821 11.7445 14.8754C11.2534 14.8587 10.7912 14.7082 10.3864 14.4625V14.5032C10.3864 16.1042 11.4186 17.4398 12.7913 17.7423C12.5391 17.8197 12.2752 17.8586 12.0008 17.8586C11.8081 17.8586 11.6193 17.8386 11.4377 17.8001C11.8182 19.1121 12.9252 20.0685 14.237 20.094C13.2107 20.9806 11.9187 21.5081 10.5151 21.5081C10.2734 21.5081 10.0341 21.4939 9.80005 21.4627C11.1265 22.3995 12.7012 22.9466 14.3938 22.9466C19.9064 22.9466 22.9192 17.9124 22.9192 13.5467C22.9192 13.4031 22.9175 13.2602 22.9116 13.1196C23.4969 12.6535 24.0064 12.0711 24.4067 11.4084C23.869 11.6712 23.2914 11.849 22.6859 11.9283Z" fill="#EC008C"/>
<defs>
<filter id="filter0_d" x="0" y="0.698242" width="35.2" height="35.4094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

                        </div>
                        <div>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<ellipse cx="17.6" cy="16.2818" rx="15.6" ry="15.7047" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3602 10.9177C19.0316 10.9177 19.2297 10.9243 19.8898 10.9558C20.5002 10.9849 20.8316 11.0917 21.0522 11.1812C21.3444 11.2999 21.553 11.4418 21.7721 11.6705C21.9909 11.8996 22.1266 12.1176 22.2401 12.423C22.3258 12.6536 22.4279 13.0001 22.4558 13.6381C22.486 14.3281 22.4923 14.5351 22.4923 16.2823C22.4923 18.0294 22.486 18.2365 22.4558 18.9265C22.4279 19.5645 22.3258 19.911 22.2401 20.1415C22.1266 20.447 21.9909 20.665 21.7721 20.8941C21.553 21.1228 21.3444 21.2647 21.0522 21.3833C20.8316 21.4732 20.5002 21.5797 19.8898 21.6088C19.2297 21.6403 19.0319 21.6469 17.3602 21.6469C15.6885 21.6469 15.4907 21.6403 14.8306 21.6088C14.2202 21.5797 13.8888 21.4732 13.6682 21.3833C13.376 21.2647 13.1674 21.1228 12.9483 20.8941C12.7295 20.665 12.5938 20.447 12.4803 20.1415C12.3943 19.911 12.2925 19.5645 12.2646 18.9265C12.2344 18.2365 12.2281 18.0294 12.2281 16.2823C12.2281 14.5351 12.2344 14.3281 12.2646 13.6381C12.2925 13.0001 12.3943 12.6536 12.4803 12.423C12.5938 12.1176 12.7295 11.8996 12.9483 11.6705C13.1674 11.4418 13.376 11.2999 13.6682 11.1812C13.8888 11.0917 14.2202 10.9849 14.8306 10.9558C15.4907 10.9243 15.6888 10.9177 17.3602 10.9177ZM17.3601 9.73828C15.6599 9.73828 15.4468 9.74572 14.779 9.77754C14.1129 9.80937 13.6579 9.92002 13.2595 10.0818C12.8478 10.249 12.4986 10.4727 12.1506 10.8364C11.8026 11.2005 11.5887 11.5651 11.4287 11.9955C11.274 12.4119 11.1681 12.8875 11.1377 13.5839C11.1072 14.2819 11.1001 14.5047 11.1001 16.2819C11.1001 18.0591 11.1072 18.2819 11.1377 18.98C11.1681 19.6763 11.274 20.1519 11.4287 20.5683C11.5887 20.9987 11.8026 21.3633 12.1506 21.7271C12.4986 22.0912 12.8478 22.3148 13.2595 22.482C13.6579 22.6438 14.1129 22.7544 14.779 22.7863C15.4468 22.8181 15.6599 22.8255 17.3601 22.8255C19.0602 22.8255 19.2734 22.8181 19.9409 22.7863C20.6073 22.7544 21.0623 22.6438 21.4607 22.482C21.8724 22.3148 22.2212 22.0912 22.5692 21.7271C22.9175 21.3633 23.1315 20.9987 23.2914 20.5683C23.4462 20.1519 23.5521 19.6763 23.5825 18.98C23.613 18.2819 23.6201 18.0591 23.6201 16.2819C23.6201 14.5047 23.613 14.2819 23.5825 13.5839C23.5521 12.8875 23.4462 12.4119 23.2914 11.9955C23.1315 11.5651 22.9175 11.2005 22.5692 10.8364C22.2212 10.4727 21.8724 10.249 21.4607 10.0818C21.0623 9.92002 20.6073 9.80937 19.9409 9.77754C19.2734 9.74572 19.0602 9.73828 17.3601 9.73828ZM17.3728 12.9319C15.5961 12.9319 14.1558 14.4375 14.1558 16.2947C14.1558 18.1516 15.5961 19.6573 17.3728 19.6573C19.1492 19.6573 20.5896 18.1516 20.5896 16.2947C20.5896 14.4375 19.1492 12.9319 17.3728 12.9319ZM17.3727 18.4774C16.2194 18.4774 15.2844 17.5003 15.2844 16.2948C15.2844 15.0893 16.2194 14.1119 17.3727 14.1119C18.526 14.1119 19.4607 15.0893 19.4607 16.2948C19.4607 17.5003 18.526 18.4774 17.3727 18.4774ZM21.434 12.7763C21.434 13.2067 21.1006 13.5553 20.6888 13.5553C20.2774 13.5553 19.9436 13.2067 19.9436 12.7763C19.9436 12.3463 20.2774 11.9974 20.6888 11.9974C21.1006 11.9974 21.434 12.3463 21.434 12.7763Z" fill="#EC008C"/>
<defs>
<filter id="filter0_d" x="0" y="0.577148" width="35.2" height="35.4094" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="2"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

                        </div>
                
                    </div>
                ): null
            }
        </div>
     );
}
 
export default TeamSocial;