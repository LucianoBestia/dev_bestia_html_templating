var searchIndex = JSON.parse('{\
"dev_bestia_html_templating":{"doc":"dev_bestia_html_templating","t":[8,10,0,0,5,10,0,0,0,3,12,11,11,11,11,11,11,5,5,11,11,11,3,3,8,3,13,4,13,12,12,12,12,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,10,5,5,11,5,5,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,11,11,11,11,10,11,11,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,5,12,13,13,13,4,4,3,13,13,11,11,11,11,11,11,11,11,11,11,11,11,5,5,11,11,11,11,11,11,11,11,5,5,5,5,5,12,12,5,12,11,11,11,11,11,11,11,11,11,11,11,11,13,13,13,4,4,3,13,13,5,5,5,5,5,12,12,5,12,5,5],"n":["HtmlTemplatingDataTrait","data_model_name","html_processor_mod","html_templating_data_trait_mod","process_html","replace_with_string","trait_utils_mod","utils","utils_mod","PREFIX","__private_field","borrow","borrow_mut","deref","from","initialize","into","process_html","root_element_node_to_html_string","try_from","try_into","type_id","Attribute","ElementNode","HtmlTemplatingDataTrait","PrefixForTemplateVariables","Server","ServerOrClient","WebBrowserClient","attr_exist","attr_text","attr_url","attributes","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","children","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","data_model_name","decode_5_xml_control_characters","decode_html_script_node","default","encode_5_xml_control_characters","encode_html_script_node","exist","exists_next_node_or_attribute","exists_next_node_or_attribute","fmt","fmt","fmt","from","from","from","from","into","into","into","into","is_self_closing","name","namespace","node","process_sub_template","process_sub_template","replace_with_nodes","replace_with_nodes","replace_with_string","replace_with_url","replace_with_url","subtemplate","subtemplate_comment","tag_name","text","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","url","url_s_zero_to_empty","value","Comment","Element","Html","HtmlOrSvg","Node","SubTemplate","Svg","Text","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","extract_children_sub_templates","fill_element_node","fmt","fmt","from","from","from","into","into","into","match_else_for_exists_next_node_or_attribute","match_else_for_process_sub_template","match_else_for_replace_with_nodes","match_else_for_replace_with_string","match_else_for_replace_with_url","name","placeholder","process_template_raw_to_nodes","template","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","Comment","Element","Html","HtmlOrSvg","Node","SubTemplate","Svg","Text","match_else_for_exists_next_node_or_attribute","match_else_for_process_sub_template","match_else_for_replace_with_nodes","match_else_for_replace_with_string","match_else_for_replace_with_url","name","placeholder","process_template_raw_to_nodes","template","join_crate_version","split_crate_version"],"q":["dev_bestia_html_templating","","","","","","","","","dev_bestia_html_templating::html_processor_mod","","","","","","","","","","","","","dev_bestia_html_templating::html_templating_data_trait_mod","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dev_bestia_html_templating::trait_utils_mod","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dev_bestia_html_templating::utils","","","","","","","","","","","","","","","","","dev_bestia_html_templating::utils_mod",""],"d":["the trait has only methods that can be implemented …","name of data model for debugging","","html templating library for html It can work on the …","process root template (not subtemplates) from string","returns a String to replace the next text-node or …","","","small utility functions","","","","","","","","","process root template (not subtemplates) from string","converts element node to string the attribute values and …","","","","An attribute on a DOM node, such as <code>id=\\\"my-thing\\\"</code>","","the trait has only methods that can be implemented …","","","The same html templating can be used on the server or on …","web browser client","","","","","","","","","","","","","","","","","","","","","","name of data model for debugging","private fn - decode 5 xml control characters : “ ’ & <…","in html the  element is decoded differently","","TODO: find a faster method // The standard library …","in html the  element is encoded differently","","boolean : is the next node existing or not: “wb_” or …","boolean : is the next node existing or not: “wb_” or …","","","","","","","","","","","","","","","","process sub-template","process sub-template","returns a vector of Nodes to replace the next Node","returns a vector of Nodes to replace the next Node","returns a String to replace the next text-node or …","same as replace_with_string, but return url exclusively …","same as replace_with_string, but return url exclusively …","","","","","","","","","","","","","","","","","","","","","","to string, but zero converts to empty","attribute value. The text must be not encoded. It will be …","comment. . The text must be not encoded. It will be xml …","An element potentially with attributes and children.","","Svg elements are different because they have a namespace","","","","A text node. The text must be not encoded. It will be xml …","","","","","","","","","","","","","extracts and saves sub_templates only one level deep: …","","","","","","","","","","boilerplate","boilerplate","boilerplate","boilerplate","boilerplate","","","this is used for templates and subtemplates equally first …","","","","","","","","","","","","","","comment. . The text must be not encoded. It will be xml …","An element potentially with attributes and children.","","Svg elements are different because they have a namespace","","","","A text node. The text must be not encoded. It will be xml …","boilerplate","boilerplate","boilerplate","boilerplate","boilerplate","","","this is used for templates and subtemplates equally first …","","",""],"i":[0,1,0,0,0,1,0,0,0,0,2,2,2,2,2,2,2,0,0,2,2,2,0,0,0,0,3,0,3,4,4,4,5,5,6,3,4,5,6,3,4,5,5,6,3,4,5,6,3,4,1,0,0,5,0,0,4,1,1,5,6,4,5,6,3,4,5,6,3,4,5,6,5,4,1,1,1,1,1,1,1,4,4,5,4,5,6,3,4,5,6,3,4,5,6,3,4,5,6,3,4,4,0,6,7,7,8,0,0,0,8,7,8,9,7,8,9,7,8,9,7,8,9,7,0,0,9,7,8,9,7,8,9,7,0,0,0,0,0,9,9,0,9,8,9,7,8,9,7,8,9,7,8,9,7,7,7,8,0,0,0,8,7,0,0,0,0,0,9,9,0,9,0,0],"f":[null,[[],["string",3]],null,null,[[["str",15]],["string",3]],[[["usize",15],["str",15]],["string",3]],null,null,null,null,null,[[]],[[]],[[],["prefixfortemplatevariables",3]],[[]],[[]],[[]],[[["str",15]],["string",3]],[[["elementnode",3]],[["result",4],["string",3]]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[],["elementnode",3]],[[],["attribute",3]],[[],["serverorclient",4]],[[],["prefixfortemplatevariables",3]],[[]],[[]],[[]],[[]],[[],["string",3]],[[["str",15]],["string",3]],[[["str",15]],["string",3]],[[],["elementnode",3]],[[["str",15]],["string",3]],[[["str",15]],["string",3]],null,[[["str",15]],["bool",15]],[[["str",15]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,[[["str",15],["vec",3]],[["node",4],["vec",3]]],[[["str",15],["vec",3]],[["node",4],["vec",3]]],[[["str",15]],[["node",4],["vec",3]]],[[["str",15]],[["node",4],["vec",3]]],[[["usize",15],["str",15]],["string",3]],[[["usize",15],["str",15]],["urlutf8encodedstring",3]],[[["usize",15],["str",15]],["urlutf8encodedstring",3]],null,null,null,null,[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,[[["usize",15]],["string",3]],null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[],["htmlorsvg",4]],[[],["subtemplate",3]],[[],["node",4]],[[]],[[]],[[]],[[["str",15]],[["subtemplate",3],["vec",3]]],[[["htmlorsvg",4],["vec",3],["readerformicroxml",3],["vec",3],["str",15],["usize",15],["elementnode",3],["bool",15]],[["option",4],["result",4]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["str",15]],["bool",15]],[[["str",15]],[["node",4],["vec",3]]],[[["str",15]],[["node",4],["vec",3]]],[[["str",15]],["string",3]],[[["str",15]],["urlutf8encodedstring",3]],null,null,[[["htmlorsvg",4],["str",15],["usize",15]],[["vec",3],["str",15],["result",4]]],null,[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null,null,[[["str",15]],["bool",15]],[[["str",15]],[["node",4],["vec",3]]],[[["str",15]],[["node",4],["vec",3]]],[[["str",15]],["string",3]],[[["str",15]],["urlutf8encodedstring",3]],null,null,[[["htmlorsvg",4],["str",15],["usize",15]],[["vec",3],["str",15],["result",4]]],null,[[["str",15]],["string",3]],[[["str",15]]]],"p":[[8,"HtmlTemplatingDataTrait"],[3,"PREFIX"],[4,"ServerOrClient"],[3,"PrefixForTemplateVariables"],[3,"ElementNode"],[3,"Attribute"],[4,"Node"],[4,"HtmlOrSvg"],[3,"SubTemplate"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};