import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  .BurguerMenu{
position: relative;

  }
  :root{
    --background: white;
    --yellow-button: rgba(14,230,123,0.1);
    --gray-600:rgb(75 85 99);
    --green-700:#015113;
    font-family: 'Poppins', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  //font-size: 16px (Desktop)
  html{
    @media (max-width: 1080px){
      font-size: 93.75%; //15px;
    }

    @media(max-width: 720px){
      font-size: 87.5%; //14px;
    }


  }



body{
    background: #d8d8d8;
    
			background-size: auto,								auto,														100% auto;
			background-position: center,								center,														top center;
			background-repeat: repeat,								  repeat,													 repeat;
			background-attachment: scroll,								scroll,														scroll;




    -webkit-font-smoothing: antialiased;
    width:100vw;
    
 
  }

  body, input, textarea, button{
    font-family: 'iceland', sans-serif;
    font-weight: 400;

  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }

.whiteH1{
  color: white;

}

form {
		margin: 0;
    background:#f5f5f5;
	}

		form > :last-child {
			margin-bottom: 0;
		}

		form > .fields {
			display: -moz-flex;
			display: -webkit-flex;
			display: -ms-flex;
			display: flex;
			-moz-flex-wrap: wrap;
			-webkit-flex-wrap: wrap;
			-ms-flex-wrap: wrap;
			flex-wrap: wrap;
			width: calc(100% + 3rem);
			margin: -1.5rem 0 2rem -1.5rem;
		}

			form > .fields > .field {
				-moz-flex-grow: 0;
				-webkit-flex-grow: 0;
				-ms-flex-grow: 0;
				flex-grow: 0;
				-moz-flex-shrink: 0;
				-webkit-flex-shrink: 0;
				-ms-flex-shrink: 0;
				flex-shrink: 0;
				padding: 1.5rem 0 0 1.5rem;
				width: calc(100% - 1.5rem);
			}

				form > .fields > .field.half {
					width: calc(50% - 0.75rem);
				}

				form > .fields > .field.third {
					width: calc(100%/3 - 0.5rem);
				}

				form > .fields > .field.quarter {
					width: calc(25% - 0.375rem);
				}

		@media screen and (max-width: 480px) {

			form > .fields {
				width: calc(100% + 3rem);
				margin: -1.5rem 0 2rem -1.5rem;
			}

				form > .fields > .field {
					padding: 1.5rem 0 0 1.5rem;
					width: calc(100% - 1.5rem);
				}

					form > .fields > .field.half {
						width: calc(100% - 1.5rem);
					}

					form > .fields > .field.third {
						width: calc(100% - 1.5rem);
					}

					form > .fields > .field.quarter {
						width: calc(100% - 1.5rem);
					}

		}

	label {
		display: block;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-weight: 900;
		line-height: 1.5;
		letter-spacing: 0.075em;
		font-size: 0.8rem;
		text-transform: uppercase;
		margin: 0 0 0.75rem 0;
	}

		@media screen and (max-width: 980px) {

			label {
				font-size: 0.9rem;
			}

		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		background: transparent;
		border-radius: 0;
		border: solid 2px;
		color: inherit;
		display: block;
		outline: 0;
		padding: 0 1rem;
		text-decoration: none;
		width: 100%;
	}

		input[type="text"]:invalid,
		input[type="password"]:invalid,
		input[type="email"]:invalid,
		select:invalid,
		textarea:invalid {
			box-shadow: none;
		}

	select {
		background-size: 1.25rem;
		background-repeat: no-repeat;
		background-position: calc(100% - 1rem) center;
		height: 3rem;
		padding-right: 3rem;
		text-overflow: ellipsis;
	}

		select:focus::-ms-value {
			background-color: transparent;
		}

		select::-ms-expand {
			display: none;
		}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select {
		height: 3rem;
	}

	textarea {
		padding: 0.75rem 1rem;
	}

	
		

	::-webkit-input-placeholder {
		opacity: 1.0;
	}

	:-moz-placeholder {
		opacity: 1.0;
	}

	::-moz-placeholder {
		opacity: 1.0;
	}

	:-ms-input-placeholder {
		opacity: 1.0;
	}

	label {
		color: #212931;
	}

	input[type="text"],
	input[type="password"],
	input[type="email"],
	select,
	textarea {
		border-color: #303134;
	}

		input[type="text"]:focus,
		input[type="password"]:focus,
		input[type="email"]:focus,
		select:focus,
		textarea:focus {
			border-color: #18bfef;
		}

	select {
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' preserveAspectRatio='none' viewBox='0 0 40 40'%3E%3Cpath d='M9.4,12.3l10.4,10.4l10.4-10.4c0.2-0.2,0.5-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4l3.3,3.3c0.2,0.2,0.4,0.5,0.4,0.9 c0,0.4-0.1,0.6-0.4,0.9L20.7,31.9c-0.2,0.2-0.5,0.4-0.9,0.4c-0.3,0-0.6-0.1-0.9-0.4L4.3,17.3c-0.2-0.2-0.4-0.5-0.4-0.9 c0-0.4,0.1-0.6,0.4-0.9l3.3-3.3c0.2-0.2,0.5-0.4,0.9-0.4S9.1,12.1,9.4,12.3z' fill='%23eeeeee' /%3E%3C/svg%3E");
	}

		select option {
			background-color: #ffffff;
			color: #212931;
		}

	.select-wrapper:before {
		color: #eeeeee;
	}

	input[type="checkbox"] + label,
	input[type="radio"] + label {
		color: #212931;
	}

		input[type="checkbox"] + label:before,
		input[type="radio"] + label:before {
			border-color: violet;
		}

	input[type="checkbox"]:checked + label:before,
	input[type="radio"]:checked + label:before {
		background-color: #212931;
		border-color: #212931;
		color: #ffffff;
	}

	input[type="checkbox"]:focus + label:before,
	input[type="radio"]:focus + label:before {
		border-color: #18bfef;
	}

	::-webkit-input-placeholder {
		color: #909498 !important;
	}

	:-moz-placeholder {
		color: #909498 !important;
	}

	::-moz-placeholder {
		color: #909498 !important;
	}

	:-ms-input-placeholder {
		color: #909498 !important;
	}

	.formerize-placeholder {
		color: #909498 !important;
	}



 /* Actions */

 ul.actions {
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		cursor: default;
		list-style: none;
		margin-left: -1rem;
		padding-left: 0;
	}

		ul.actions li {
			padding: 0 0 0 1rem;
			vertical-align: middle;
		}

		ul.actions.special {
			-moz-justify-content: center;
			-webkit-justify-content: center;
			-ms-justify-content: center;
			justify-content: center;
			width: 100%;
			margin-left: 0;
		}

			ul.actions.special li:first-child {
				padding-left: 0;
			}

		ul.actions.stacked {
			-moz-flex-direction: column;
			-webkit-flex-direction: column;
			-ms-flex-direction: column;
			flex-direction: column;
			margin-left: 0;
		}

			ul.actions.stacked li {
				padding: 1.3rem 0 0 0;
			}

				ul.actions.stacked li:first-child {
					padding-top: 0;
				}

		ul.actions.fit {
			width: calc(100% + 1rem);
		}

			ul.actions.fit li {
				-moz-flex-grow: 1;
				-webkit-flex-grow: 1;
				-ms-flex-grow: 1;
				flex-grow: 1;
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				width: 100%;
			}

				ul.actions.fit li > * {
					width: 100%;
				}

			ul.actions.fit.stacked {
				width: 100%;
			}

		@media screen and (max-width: 480px) {

			ul.actions:not(.fixed) {
				-moz-flex-direction: column;
				-webkit-flex-direction: column;
				-ms-flex-direction: column;
				flex-direction: column;
				margin-left: 0;
				width: 100% !important;
			}

				ul.actions:not(.fixed) li {
					-moz-flex-grow: 1;
					-webkit-flex-grow: 1;
					-ms-flex-grow: 1;
					flex-grow: 1;
					-moz-flex-shrink: 1;
					-webkit-flex-shrink: 1;
					-ms-flex-shrink: 1;
					flex-shrink: 1;
					padding: 1rem 0 0 0;
					text-align: center;
					width: 100%;
				}

					ul.actions:not(.fixed) li > * {
						width: 100%;
					}

					ul.actions:not(.fixed) li:first-child {
						padding-top: 0;
					}

					ul.actions:not(.fixed) li input[type="submit"],
					ul.actions:not(.fixed) li input[type="reset"],
					ul.actions:not(.fixed) li input[type="button"],
					ul.actions:not(.fixed) li button,
					ul.actions:not(.fixed) li .button {
						width: 100%;
					}

						ul.actions:not(.fixed) li input[type="submit"].icon:before,
						ul.actions:not(.fixed) li input[type="reset"].icon:before,
						ul.actions:not(.fixed) li input[type="button"].icon:before,
						ul.actions:not(.fixed) li button.icon:before,
						ul.actions:not(.fixed) li .button.icon:before {
							margin-left: -0.5rem;
						}

		}

/* Icons */

	ul.icons {
		cursor: default;
		list-style: none;
		padding-left: 0;
	}

		ul.icons li {
			display: inline-block;
			padding: 0 0.5rem 0 0;
			vertical-align: middle;
		}

			ul.icons li:last-child {
				padding-right: 0;
			}

			ul.icons li .icon:before {
				width: 2.25rem;
				height: 2.25rem;
				line-height: 2.25rem;
				display: inline-block;
				text-align: center;
				border-radius: 100%;
				font-size: 1.25rem;
			}

		ul.icons.alt li .icon:before {
			-moz-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
			-webkit-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
			-ms-transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
			transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
			font-size: 1rem;
		}

/* List */

	ol {
		list-style: decimal;
		margin: 0 0 2rem 0;
		padding-left: 1.25rem;
	}

		ol li {
			padding-left: 0.25rem;
		}

	ul {
		list-style: disc;
		margin: 0 0 2rem 0;
		padding-left: 1rem;
	}

		ul li {
			padding-left: 0.5rem;
		}

		ul.divided {
			list-style: none;
			padding-left: 0;
		}

			ul.divided li {
				border-top: solid 1px;
				padding: 0.5rem 0;
			}

				ul.divided li:first-child {
					border-top: 0;
					padding-top: 0;
				}

	dl {
		margin: 0 0 2rem 0;
	}

		dl dt {
			display: block;
			font-weight: 600;
			margin: 0 0 1rem 0;
		}

		dl dd {
			margin-left: 2rem;
		}

	ul.divided li {
		border-top-color: #eeeeee;
	}

	ul.icons li a.icon:hover:before {
		color: #18bfef;
	}

	ul.icons.alt li .icon:before {
		box-shadow: inset 0 0 0 2px #eeeeee;
	}

	ul.icons.alt li a.icon:hover:before {
		box-shadow: inset 0 0 0 2px #18bfef;
	}

/* Section/Article */

	section.special, article.special {
		text-align: center;
	}

	header {
		cursor: default;
	}

		header > .date {
			display: block;
			font-size: 0.8rem;
			height: 1;
			margin: 0 0 1rem 0;
			position: relative;
		}

		header > p {
			font-style: italic;
		}

		header > h1 + p {
			font-size: 1.1rem;
			margin-top: -0.5rem;
			line-height: 2;
		}

		header > h2 + p {
			font-size: 1rem;
			margin-top: -0.75rem;
		}

		header > h3 + p {
			font-size: 0.9rem;
			margin-top: -0.75rem;
		}

		header > h4 + p {
			font-size: 0.8rem;
			margin-top: -0.75rem;
		}

		header.major {
			margin: 0 0 4rem 0;
			text-align: center;
		}

			header.major > :last-child {
				margin-bottom: 0;
			}

			header.major > p {
				margin-top: 0;
				text-align: center;
			}

			header.major > .date {
				font-size: 1rem;
				margin: 0 0 4rem 0;
			}

				header.major > .date:before, header.major > .date:after {
					content: '';
					display: block;
					position: absolute;
					top: 50%;
					width: calc(50% - 6rem);
					border-top: solid 2px;
				}

				header.major > .date:before {
					left: 0;
				}

				header.major > .date:after {
					right: 0;
				}

		@media screen and (max-width: 980px) {

			header br {
				display: none;
			}

		}

		@media screen and (max-width: 736px) {

			header.major {
				margin: 0 0 2rem 0;
			}

		}

	header.major .date:before, header.major .date:after {
		border-top-color: #eeeeee;
	}

    /*button */

    input[type="submit"],
		input[type="reset"],
		input[type="button"],
		#button,
		.button {
			background-color: transparent;
			color: #717981 !important;
      border-color: #DEE0E3;

      padding:1rem;
      min-width:3rem;
     

		}

			input[type="submit"]:hover,
			input[type="reset"]:hover,
			input[type="button"]:hover,
			button:hover,
			.button:hover {
				box-shadow: inset 0 0 0 2px #18bfef;
				color: #18bfef !important;
        padding:1.1rem;
        border: none;
			}


   

	


`