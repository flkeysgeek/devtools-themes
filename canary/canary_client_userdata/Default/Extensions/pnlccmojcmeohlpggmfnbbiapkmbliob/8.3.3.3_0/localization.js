// Copyright (C) 1999-2017 Siber Systems Inc. All Rights Reserved.
function zah(zapc){var zapd="";switch(zapc){case"operation_not_supported":zapd="Operation is not supported. Please update RoboForm to ver. 8";break;case"Change_Account_Password_Prohibited":zapd="Change account password is prohibited by policies settings";break;case"changing_password":zapd="Changing Password";break;case"error_code":zapd="Error Code %1";break;case"Change_Account_Password_Login_First":zapd="You need to login first before you can change account password";break;case"Password_Successfully_Changed":zapd="Password Successfully Changed";break;case"Wrong_Password":zapd="Wrong Password";break;case"Change_Account_Password":zapd="Change Account Password for user:";break;case"Old_Change_Account_Password":zapd="Old Password:";break;case"New_Change_Account_Password":zapd="New password:";break;case"Confirm_Change_Account_Password":zapd="Confirm Password:";break;case"MasterPass_Change_Old":zapd="Old Master Password:";break;case"MasterPass_Change_New":zapd="New Master Password:";break;case"MasterPass_Change_Confirm":zapd="Confirm New Master Password:";break;case"MasterPass_Change":zapd="Change Your Master Password";break;case"MasterPass_Expired":zapd="It is time to change your RoboForm Master Password";break;case"IDS_MasterPass_New_Length_Error":zapd="Length of Password must be between %1 and %2 characters";break;case"IDS_MasterPass_New_BlanksOnly_Error":zapd="A Password can not consist of blank spaces only";break;case"IDS_MasterPass_New_UpperCaseChars_Error":zapd="Minimum number of upper-case chars in password must be %1";break;case"IDS_MasterPass_New_LowerCaseChars_Error":zapd="Minimum number of lower-case chars in password must be %1";break;case"IDS_MasterPass_New_DigitChars_Error":zapd="Minimum number of digit chars in password must be %1";break;case"IDS_MasterPass_New_NonNumChars_Error":zapd="Minimum number of non-numeric chars in password must be %1";break;case"IDS_MasterPass_New_TheSameAsPrevious_Error":zapd="A new Password must differ from the current";break;case"limited_mode":zapd="This extension offers limited functionality only. To enable all the features ";break;case"limited_link_text":zapd="Install RoboForm application";break;case"enter_password":zapd="Enter Password";break;case"for_account":zapd="for RoboForm Account:";break;case"change_account":zapd="Change Account";break;case"setup_description_first":zapd="You installed RoboForm for Chrome extension. This extension offers limited functionality only. For full functionality you must update or install full RoboForm application on your computer.";break;case"setup_description_repair":zapd="You previously used RoboForm for Chrome extension with RoboForm software on your computer, but now RoboForm software is old or not installed. Click the \"Install now\" button below to repair or update version of RoboForm on your computer.";break;case"setup_description_second":zapd="You previously used RoboForm for Chrome extension in online mode, but now RoboForm software found on your computer. Click the \"Use Local RoboForm\" button below to use extension with local version of RoboForm on your computer. If you want to continue to use RoboForm extension in online mode click \"Use RoboForm Online\" below.";break;case"welcome":zapd="Welcome to RoboForm";break;case"Setup_Welcome_HeaderTitle":zapd="Welcome to RoboForm";break;case"Roboform_Online_Authentication":zapd="RoboForm Authentication";break;case"Enter_your_RoboForm_Online_User_ID_and_Password":zapd="Enter your RoboForm User ID and Password:";break;case"You_have_entered_an_invalid_User_ID_and_or_Password":zapd="You have entered an invalid User ID and/or Password";break;case"password":zapd="Password:";break;case"login_btn":zapd="Login";break;case"auto_logoff":zapd="Auto Logoff";break;case"pwd_score_weak":zapd="Weak";break;case"pwd_score_medium":zapd="Medium";break;case"pwd_score_good":zapd="Good";break;case"pwd_score_strong":zapd="Strong";break;case"clear_list":zapd="(Clear List)";break;case"menu_Generate_Pass":zapd="Generate Password";break;case"Generate":zapd="Generate";break;case"Fill":zapd="Fill";break;case"Copy_pwd":zapd="Copy";break;case"Number_of_symbols":zapd="Number of characters";break;case"Minimal_Number_of_digits":zapd="Minimal number of digits";break;case"Copy_Password_to_Clipboard":zapd="Copy new generated password to clipboard";break;case"Exclude_similar":zapd="Exclude similar characters";break;case"Hexadecimal":zapd="Hexadecimal 0-9, A-F";break;case"generate_Pass_helptext1":if(zae){zapd="Password has been generated. Click <b>Fill</b> to fill password";}
else if(zaf){zapd="Password has been generated.";}
else{zapd="New password has been generated. Click Fill to fill";}
break;case"generate_Pass_helptext2":if(zae){zapd="field in the browser.";}
else{zapd="password field in the browser. Click Copy to copy it";}
break;case"generate_Pass_helptext3":if(zae){zapd="Click <b>Copy</b> to copy it to Clipboard. Click <b>Generate</b> to";}
else{zapd="to Clipboard. Click Generate to generate new one.";}
break;case"generate_Pass_helptext4":zapd="";break;case"wrong_number_of_characters":zapd="Wrong number of characters (1-99)";break;case"wrong_number_of_digits":zapd="Wrong number of digits";break;case"Version":zapd="Version:";break;case"Build":zapd="Build:";break;case"Login_Tooltip":zapd="Login to RoboForm account";break;case"OTP_otptext_main":zapd="The One Time Password (OTP) setting is ON for your account and this device has not been enrolled.";break;case"OTP_otptext_mail":zapd="You should have received sms or email message containing OTP.";break;case"One_time_password":zapd="Your OTP:";break;case"OTP_memorize_device":zapd="Enroll this browser, so that OTP will not be requested on next login.";break;case"Need_OTP":zapd="You need to enter OTP";break;case"Wrong_OTP":zapd="Wrong One-Time Password";break;case"Options_Main_Title":zapd="RoboForm Options";break;case"Options_Account_Title":zapd="Account";break;case"Options_AutoSave_Title":zapd="AutoSave";break;case"Options_OfferAutoSave_WebForms2_Text":zapd="Offer to Save Logins from web (HTML) forms";break;case"Options_AutoSave_ShiftEnterEnable_Text":zapd="SHIFT+ENTER in text field forces AutoSave";break;case"Options_AutoSave_AltClickEnable_Text":zapd="ALT+click of Login button forces AutoSave";break;case"Options_Security_Title":zapd="Security";break;case"Options_Security_CacheMPBrowserSessions_Text":zapd="Cache Master Password between browser sessions";break;case"Options_Security_AutoLogoffAfterIdle_Text":zapd="Automatically Logoff after idle (minutes 0-99999)* ";break;case"Options_Security_TakeEffectNextSession":zapd="*It will take effect from the next RoboForm session";break;case"Options_Security_Minute_Text":zapd="min";break;case"Options_Security_Hour_Text":zapd="hour";break;case"Options_Security_Hours_Text":zapd="hours";break;case"Options_Security_Day_Text":zapd="day";break;case"Options_Security_Days_Text":zapd="days";break;case"Options_Security_Week_Text":zapd="week";break;case"Options_Security_Weeks_Text":zapd="weeks";break;case"Options_Security_Month_Text":zapd="month";break;case"Options_FillForms_Title":zapd="Fill Forms";break;case"Options_FillForms_HighlightFields_Text":zapd="Highlight filled fields";break;case"Options_Fill_SubmitDefButton_PC_Text":zapd="'Fill & Submit' is the default action for Matching Logins";break;case"Options_Search_Title":zapd="Search";break;case"SearchAction_Search_In_RoboForm_Names":zapd="Search '%' in RoboForm Names";break;case"SearchAction_Search_In_Yahoo":zapd="Search '%' in Yahoo";break;case"SearchAction_Search_In_Google":zapd="Search '%' in Google";break;case"SearchAction_Search_In_Bing":zapd="Search '%' in Bing";break;case"SearchAction_Search_In_eBay":zapd="Search '%' in eBay";break;case"SearchAction_Search_In_Amazon":zapd="Search '%' in Amazon";break;case"SearchAction_Phrase_Text":zapd="phrase";break;case"Options_Extended_ActiveServer_Text":zapd="Active server to work with: ";break;case"Options_Security_AutoLogoffDisabled_Text":zapd="*This option was set and can be changed only on RoboForm Online website,<br /> in Policy Editor tab";break;case"Login":zapd="Login";break;case"menu_gotofill":zapd="Go \u0026 Fill";break;case"menu_goto":zapd="Go To";break;case"menu_matching_fill":zapd="Fill Forms";break;case"menu_matching_fillsubmit":zapd="Fill\u0026Submit";break;case"cache_mast_password_lbl_options":zapd="Cache Master password until logoff";break;case"Recently_Used":zapd="Recenlty Used";break;case"Recently_used_logins":zapd="Show Recently Used Logins";break;case"Recently_Items_Count":zapd="Last Logins:";break;case"hot_keys_section":zapd="Keyboard";break;case"hotkeys_open_Options":zapd="Show Options";break;case"hotkeys_fill_identity":zapd="Fill in active Identity";break;case"generate_fill_pwd":zapd="Generate and Fill Password";break;case"fill_next_login":zapd="Fill in Next Login (if several)";break;case"fill_previous_login":zapd="Fill in Previous Login (if several)";break;case"match_matchlogins":zapd="Matching Logins";break;case"match_fillemptyfields":zapd="Fill Empty Fields Only";break;case"match_edit_btn":zapd="Edit";break;case"match_fillforms_btn":zapd="Fill Forms";break;case"match_fillsubmit_btn":zapd="Fill & Submit";break;case"match_fill_from":zapd="Fill from:";break;case"activeID_setup_formfill":zapd="Setup Form Filling";break;case"fill_from_identity":zapd="Fill from Identity";break;case"match_show_all_logins":zapd="Show all Logins";break;case"match_show_all_identities":zapd="Show all Identities";break;case"edit_header":zapd="Edit %1";break;case"fill_header":zapd="Fill from %1";break;case"identities_header":zapd="Identities";break;case"contacts_header":zapd="Contacts";break;case"safenotes_header":zapd="Safenotes";break;case"logins_header":zapd="Logins";break;case"bookmarks_header":zapd="Bookmarks";break;case"generator_header":zapd="Password Generator";break;case"search_header":zapd="Search Results";break;case"recent_header":zapd="Recently Used";break;case"help_header":zapd="Help";break;case"new_folder_header":zapd="New Folder";break;case"matching_header":zapd="Matching Logins";break;case"savebar_info_label":zapd="Would you like to save info as:";break;case"savebar_inhome_label":zapd="in";break;case"savebar_protect_ckbox":zapd="Password-protect";break;case"savebar_save_btn":zapd="Save";break;case"savebar_close_btn":zapd="Close";break;case"err_object_already_exists":zapd="Object with a same name already exists";break;case"savebar_as_bookmark":zapd="Save as Bookmark";break;case"name_length_restrictions":zapd="Name length must be 1-255 symbols";break;case"create_symbol_restrict":zapd="Symbols \\ / : * ? \" < > | are not allowed";break;case"alert_delete_msg":zapd="Do you want to delete";break;case"session_expire":zapd="Your session has timed out. Please sign in again.";break;case"Yes":zapd="Yes";break;case"No":zapd="No";break;case"cancel_btn":zapd="Cancel";break;case"folder_name":zapd="Folder name:";break;case"Fields":zapd="Fields";break;case"Rename_to":zapd="Rename to:";break;case"menu_Options":zapd="Options";break;case"menu_RecentlyUsed":zapd="Recently Used";break;case"menu_Help":zapd="Help";break;case"menu_Logoff":zapd="Logoff";break;case"new_login":zapd="Login";break;case"new_bookmark":zapd="Bookmark";break;case"New_Folder":zapd="New Folder...";break;case"New":zapd="New:";break;case"Name":zapd="Name";break;case"Create_new":zapd="Create new ";break;case"CreateDlg_note_lbl":zapd="Note";break;case"CreateDlg_country_lbl":zapd="Country";break;case"CreateDlg_identity_top_lbl":zapd="Enter your Name and select <br /> Country where you live";break;case"CreateDlg_identity_name_lbl":zapd="First and Last Name";break;case"password_protected1":zapd="This object is password protected. Please";break;case"password_protected2":zapd="enter your Master Password to use it.";break;case"cache_mast_pwd":zapd="Use this password until logoff";break;case"password_protected3":zapd="This object is password protected.<br />Please enter your Master Password <br />to use it.";break;case"savebar_createmp_caption":zapd="RoboForm Setup Master Password";break;case"savebar_createmp_text1":zapd="To password-protect your data you have to setup";break;case"savebar_createmp_text2":zapd="Master Password";break;case"Setup_Master_Password":zapd="Setup RoboForm Master Password";break;case"mp_createmp_text":zapd="To password-protect your data you have to setup master password";break;case"savebar_wrong_mp_text":zapd="Please enter your RoboForm Master Password";break;case"rfMPsection_legend":zapd="Master Password";break;case"savebar_createmp_password":zapd="Master Password:";break;case"mast_pwd_created_ok":zapd="Master Password was created";break;case"mast_pwd_limit":zapd="Password must be between 6 and 80 symbols";break;case"wrong_master_password":zapd="Wrong Master Password";break;case"savebar_createmp_confirm":zapd="Confirm Password:";break;case"search_bar_yahoo_text":zapd="Search '%' in Yahoo";break;case"search_bar_google_text":zapd="Search '%' in Google";break;case"search_bar_roboform_text":zapd="Search '%' in RoboForm files";break;case"search_bar_bing_text":zapd="Search '%' in Bing";break;case"search_bar_ebay_text":zapd="Search '%' in eBay";break;case"search_bar_amazon_text":zapd="Search '%' in Amazon";break;case"search_bar_options_text":zapd="(Customize Search Box)";break;case"search_dropdown_login_item_text":zapd="Login to '%'";break;case"search_dropdown_bookmark_item_text":zapd="Go to '%'";break;case"search_dropdown_identity_item_text":zapd="Fill from '%'";break;case"search_dropdown_contact_item_text":zapd="Edit '%'";break;case"search_dropdown_safenote_item_text":zapd="Edit '%'";break;case"CreateAccount_Step1_TopText":zapd="RoboForm Setup";break;case"CreateAccount_Step1_Create_Free":zapd="Create free account";break;case"CreateAccount_Step1_EMAIL":zapd="Email:";break;case"CreateAccount_Step2_TopText":zapd="RoboForm Setup";break;case"CreateAccount_TopText":zapd="Setup a new RoboForm account";break;case"CreateAccount_Step1_AccountPwd":zapd="Account Password:";break;case"CreateAccount_Step1_AccountPwdConfirm":zapd="Confirm Password:";break;case"CreateAccount_Step1_NAME":zapd="Your Name:";break;case"CreateAccount_Step1_PHONE":zapd="Your Phone:";break;case"CreateAccount_Step1_NextBtn":zapd="Next";break;case"Install_Next":zapd="Next";break;case"Install_Back":zapd="Back";break;case"Setup_MasterPassword_HeaderSubtitle":zapd="Only you know your Master Password";break;case"Setup_ConfirmMasterPassword_Title":zapd="Confirm Master Password";break;case"Install_Email":zapd="Email:";break;case"Setup_ConfirmMasterPassword_Prompt":zapd="Make sure you enter your Master Password correctly";break;case"Setup_ConfirmMasterPassword_Password_Text":zapd="Master Password:";break;case"RFOSetup_CreateNewAccount":zapd="Create New RoboForm account";break;case"RFOSetup_EnterAccountId":zapd="Email or User ID:";break;case"RFOSetup_EnterPasswordForAccount":zapd="Enter password for RoboForm Account:";break;case"master_password_empty":zapd="Password should not be empty";break;case"email_empty":zapd="Email should not be empty";break;case"name_empty":zapd="Name should not be empty";break;case"master_password_confirm_error":zapd="Cannot confirm passwords";break;case"CreateAccount_Step1_Text":zapd="A Master Password is used to secure all your passwords and other data stored within RoboForm. You will be asked to enter your Master Password to access your RoboForm data.";break;case"CreateAccount_Step1_MasterPwd":zapd="Master Password:";break;case"CreateAccount_Step2_MasterPwdConfirm":zapd="Retype Your Master Password";break;case"App_Upload":zapd="App Upload";break;case"Person":zapd="Person";break;case"Location":zapd="Location";break;case"Business":zapd="Business";break;case"Credit_Card":zapd="Credit Card";break;case"Bank_Account":zapd="Bank Account";break;case"Car":zapd="Car";break;case"Passport":zapd="Passport";break;case"Custom":zapd="Custom";break;case"Default_Password":zapd="Authentication";break;case"View_identity":zapd="View identity";break;case"The_following_information_about":zapd="The following information about";break;case"is_available_for_viewing":zapd="is available for viewing";break;case"select_group_instance":zapd="Select Group Instance";break;case"editor_note_lbl":zapd="Note";break;case"custom_field_name":zapd="Field Name";break;case"custom_field_value":zapd="Field Value";break;case"custom_field_matches":zapd="Other Match Strings";break;case"custom_add_field":zapd="Add new Custom Field";break;case"other_files":zapd="Other files";break;case"delete_warning":zapd="Once deleted, these personal files will be lost.";break;case"download_started":zapd="Download has been started";break;case"download_started_description":zapd="Once the download is completed, run the downloaded RoboForm installer.";break;case"unblock_description":zapd="Do you want to unblock \"%1\"? This will allow AutoFill and AutoSave to pop up again on all pages of web site \"%2\"";break;case"sync_not_allowed":zapd="Sync for this account is not allowed.";break;case"account_suspended":zapd="This account is suspended.";break;case"enterprise_license_expired":zapd="Business License Expired.";break;case"enterprise_license_exceeded":zapd="Business License Exceeded.";break;case"contact_administrator":zapd="Please contact your company administrator.";break;default:zapd=zapc;break;}
return zapd;}function zaof(zhk){try{var key=zhk.replace(new RegExp("[^a-zA-Z0-9_]","g"),"_");var zafb="";if(typeof(chrome)!='undefined'&&typeof(chrome.i18n)!="undefined"&&typeof(chrome.i18n.getMessage)=="function"){zafb=chrome.i18n.getMessage(key);}
else if(typeof(browser)!="undefined"&&typeof(browser.i18n)!="undefined"&&typeof(browser.i18n.getMessage)=="function"){zafb=browser.i18n.getMessage(key);}
if(typeof(zafb)=="undefined"||zafb==null){zafb="";}
if(zafb==""){zafb=zah(zhk);}return zafb;}catch(zhj){return zah(zhk);}
}