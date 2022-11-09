ace.define("ace/theme/vscode",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-vscode",t.cssText=".ace-vscode .ace_gutter {background: #1E1E1E;color: rgb(125,125,125)}.ace-vscode .ace_print-margin {width: 1px;background: #e8e8e8}.ace-vscode {background-color: #1E1E1E;color: #DCDCDC}.ace-vscode .ace_cursor {color: #DCDCDC}.ace-vscode .ace_marker-layer .ace_selection {background: #264F78}.ace-vscode.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #1E1E1E;border-radius: 2px}.ace-vscode .ace_marker-layer .ace_step {background: rgb(198, 219, 174)}.ace-vscode .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-vscode .ace_marker-layer .ace_active-line {background: #0F0F0F}.ace-vscode .ace_gutter-active-line {background-color: #0F0F0F}.ace-vscode .ace_marker-layer .ace_selected-word {border: 1px solid #264F78}.ace-vscode .ace_fold {background-color: #DCDCDC;border-color: #DCDCDC}.ace-vscode .ace_keyword.ace_operator {color: #DCDCDC ;}.ace-vscode .ace_keyword {color: 	#C586C0}.ace-vscode .ace_constant {color: #B4CEA8}.ace-vscode .ace_constant.ace_language {color: #569CD6}.ace-vscode .ace_constant.ace_numeric {color: #B5CEA8}.ace-vscode .ace_constant.ace_character.ace_escape {color: #E3BBAB}.ace-vscode .ace_support.ace_function {color: #DCDCAA}.ace-vscode .ace_support.ace_constant {color: #B5CEA8}.ace-vscode .ace_support.ace_class {color: 	#4EC9B0}.ace-vscode .ace_support.ace_type {color: 	#4EC9B0}.ace-vscode .ace_storage.ace_type {color: #569CD6}.ace-vscode .ace_invalid {color: #ff3333}.ace-vscode .ace_string {color: #D69D85}.ace-vscode .ace_comment {color: #608B4E}.ace-vscode .ace_variable {color: 	#9CDCFE}.ace-vscode .ace_meta.ace_tag {color: #808080}.ace-vscode .ace_entity.ace_other.ace_attribute-name {color: #92CAF4}.ace-vscode .ace_entity.ace_name.ace_function {color: #dcdcaa}.ace-vscode .ace_entity.ace_name.ace_type {color: #4EC9B0}.ace-vscode .ace_entity.ace_name.ace_tag {color: #569CD6}.ace-vscode .ace_markup.ace_heading {color: #569CD6}.ace-vscode .ace_markup.ace_list {color: #DCDCDC}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)});                (function() {
                    ace.require(["ace/theme/vscode"], function(m) {
                        if (typeof module == "object" && typeof exports == "object" && module) {
                            module.exports = m;
                        }
                    });
                })();
            