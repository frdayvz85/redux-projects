import React from 'react'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";
import Button from '@material-ui/core/Button';

const Share = () => {
    const handleShare = () => {
        const popup = document.querySelector(".popup")
        popup.classList.toggle("show");
    }
    const handleShareClose = () => {
        const viewBtn = document.querySelector(".view-modal");
        viewBtn.click();
    }

    const copyLink = () => {
        const popup = document.querySelector(".popup")
        const field = popup.querySelector(".field");
        const input = field.querySelector("input");
        const copy = field.querySelector("button");
        input.select(); //select input value
        if (document.execCommand("copy")) { //if the selected text copy
            field.classList.add("active");
            copy.innerText = "Copied";
            setTimeout(() => {
                window.getSelection().removeAllRanges(); //remove selection from document
                field.classList.remove("active");
                copy.innerText = "Copy";
            }, 3000);
        }
    }

    const shareUrl = 'http://github.com';
    const title = 'Resume builder';
    return (
        <>
            <Button class="view-modal" onClick={handleShare}><i class="fas fa-share-alt" title="Share"></i></Button>
            <div class="popup">
                <header className="share-header">
                    <span>Share Resume site with others</span>
                    <div class="close" onClick={handleShareClose}><i class="fas fa-times"></i></div>
                </header>
                <div class="content">
                    <p>Share this link via</p>
                    <ul class="icons">
                        <FacebookShareButton
                            url={shareUrl}
                            quote={title}
                            className="Demo__some-network__share-button"
                        >
                            <i class="fab fa-facebook-f"></i>
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                            <i class="fab fa-twitter"></i>
                        </TwitterShareButton>
                        <WhatsappShareButton
                            url={shareUrl}
                            title={title}
                            separator=":: "
                            className="Demo__some-network__share-button"
                        >
                            <i class="fab fa-whatsapp"></i>
                        </WhatsappShareButton>
                        <TelegramShareButton
                            url={shareUrl}
                            title={title}
                            className="Demo__some-network__share-button"
                        >
                            <i class="fab fa-telegram-plane"></i>
                        </TelegramShareButton>
                        <LinkedinShareButton url={shareUrl} className="Demo__some-network__share-button">
                            <i class="fab fa-linkedin"></i>
                        </LinkedinShareButton>
                        <EmailShareButton
                            url={shareUrl}
                            subject={title}
                            body="I recommend this website - "
                            className="Demo__some-network__share-button"
                        >
                           <i class="fas fa-envelope"></i>
                        </EmailShareButton>
                    </ul>
                    <p>Or copy link</p>
                    <div class="field">
                        <i class="url-icon uil uil-link"></i>
                        <input type="text" readonly value={shareUrl} />
                        <button onClick={copyLink}>Copy</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Share
