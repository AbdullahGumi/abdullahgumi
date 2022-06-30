import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/*----------------------------
	Global styles
----------------------------*/
input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
	.container {
		padding-right: 6.5%;
		padding-left: 6.5%;
		margin-right: auto;
		margin-left: auto;
	}
	@media (min-width: 768px) {
	  .container {
			padding-right: 0;
			padding-left: 0;
	    width: 750px;
	  }
	}
	@media (min-width: 992px) {
	  .container {
	    width: 970px;
	  }
	}
	@media (min-width: 1200px) {
		.container {
			width: 1170px;
		}
	}
`;

export default GlobalStyle;
