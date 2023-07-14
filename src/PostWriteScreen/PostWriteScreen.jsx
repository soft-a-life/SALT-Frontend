import React, {useEffect, useCallback } from 'react';
import {useNavigate} from "react-router-dom";
import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {Schema, DOMParser} from "prosemirror-model"
import {schema} from "prosemirror-schema-basic"
import {addListNodes} from "prosemirror-schema-list"
import {exampleSetup} from "prosemirror-example-setup"

/*
*  최초 작성일 : 23.07.06
*  작성자 : 김영민
*  기능명세 : 글 작성
* */
function PostWriteScreen(props) {
    const {
        userObject
    } = props;

    const navi = useNavigate();

    useEffect(() => {
        if(!userObject.isLogin){
            navi("/")
            alert("로그인 후 가능합니다.");
        }
    },[])


    const mySchema = new Schema({
        nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
        marks: schema.spec.marks
    })
    window.view = new EditorView(document.querySelector("#editor"), {
        state: EditorState.create({
            doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#root")),
            plugins: exampleSetup({schema: mySchema})
        })
    })
    return (
        <div>

        </div>
    );
}

export default PostWriteScreen;