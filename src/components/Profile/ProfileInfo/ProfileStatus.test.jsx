import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component",
    () => {
        test("Status from props in the state", () => {
            const component = create(<ProfileStatus status={'it-kamasutra.com'}/>);
            const instance = component.getInstance()
            expect(instance.state.status).toBe('it-kamasutra.com');
        });
        // test("span tag visible", () => {
        //     const component = create(<ProfileStatus status={'it-kamasutra.com'}/>);
        //     const root = component.root
        //     let span = root.findByType("span")
        //     expect(span).toBe(1);
        // });
        test("after creation text", () => {
            const component = create(<ProfileStatus status={'it-kamasutra.com'}/>);
            const root = component.root
            let span = root.findByType("span")
            expect(span.children[0]).toBe('it-kamasutra.com');
        });
        test("after creation no <input>", () => {
            const component = create(<ProfileStatus status={'it-kamasutra.com'}/>);
            const root = component.root
            expect(() => {
                let input = root.findByType("input")
            }).toThrow();
        });
        test("input should be displayed in editMode instead of span", () => {
            const component = create(<ProfileStatus status={'it-kamasutra.com'}/>);
            const root = component.root
            let span = root.findByType("span")
            span.props.onDoubleClick()
            let input = root.findByType("input")
            expect(input.props.value).toBe('it-kamasutra.com')

        });
        test("callback should be called", () => {
            const mockCallback = jest.fn()
            const component = create(<ProfileStatus status={'it-kamasutra.com'} updateStatus={mockCallback}/>);
            const instance = component.getInstance()
            instance.deActivateEditMode()
            expect(mockCallback.mock.calls.length).toBe(1)

        });
    })