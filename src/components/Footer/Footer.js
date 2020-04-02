import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <footer class="footer">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-12">
                                <ul class="list-inline social-buttons">
                                    <li class="list-inline-item">
                                        <a href="https://www.facebook.com/bankruptcy599/">
                                            <i class="fa fa-facebook-f" id="facebook-icon"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        <div class="col-md-12">
                            <span class="copyright">Copyright &copy; Lounsberry Law 2020</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div> 
        )
    }
}

export default Footer;