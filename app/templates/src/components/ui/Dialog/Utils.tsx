import * as React from 'react';
import { Button } from '../Button/Button';
import { DP } from '../../../constants';
import { Translation } from '../../../models/models';
import { EmbedCode } from '../EmbedCode/EmbedCode';
import { IS_SAFARI, IS_MOBILE } from '../../../config';
import { Form } from '../../forms/Form/Form';
import { DialogNormalLayout } from './Dialog';
import { FormElement } from '../../forms/Form/FormModels';
import { TEST_FORM } from '../../forms/Form/config';

export const DEFAULT_DIALOG = (content: any) => {

    return DP.show((res, rej) => {
        return (
            <DialogNormalLayout>
                <main>
                    {content}
                </main>
            </DialogNormalLayout>
        )
    })

}

export const SHOW_DIALOG = () => {
    return DP.show((res, rej) => {
        return (
            <DialogNormalLayout>
                <header className="dialog__header">
                    <h1>this is the title</h1>
                </header>
                <main>
                    <div className="row">
                        <div className="col s12">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad provident tempora esse unde voluptate, minus a iure porro omnis tempore eos veritatis nostrum aperiam quasi quidem possimus aliquid officia optio.</p>
                        </div>
                    </div>

                    <Form
                        elements={TEST_FORM}
                        onSubmit={(e) => {
                            // console.log(e)
                        }}
                        onCancel={() => {
                            // console.log("canceled")
                        }}
                    >

                        <div className="">
                            <input type="submit" value="Submit" className="btn" />
                        </div>
                    </Form>
                </main>
            </DialogNormalLayout>
        )
    }, { className: "dialog--medium" })
}


export const SHOW_FLAG_FORM_DIALOG = (formContents:FormElement[]) => {
    let formEl:Form; 
    return DP.show((res, rej) => {
        return (
            <DialogNormalLayout>
                <header className="dialog__header">
                </header>
                <main>
                    <Form
                        ref={(e)=> {
                            formEl = e;
                        }}
                        elements={formContents}
                        onSubmit={(e) => {
                            console.log("form submited")
                            DP.hide();
                            res(e);
                        }}
                        onCancel={() => {
                            DP.hide();
                            rej(new Error("Form Canceled"));
                        }}
                    >

                        {/* <div className="">
                            <Button
                                className="button--full-width"
                                onClick={() => {formEl.submit}}
                            >
                                Select
                            </Button>
                        </div> */}
                    </Form>
                </main>
            </DialogNormalLayout>
        )
    }, { className: "dialog--large" })
}


export const SHOW_API_FORM_DIALOG = (item:any) => {
    let formEl: Form;

    return DP.show((res, rej) => {
        return (
            <DialogNormalLayout>
                <header className="row dialog__header">
                    <div className="col s12">
                        <h2>{item.dialogTitle}</h2>
                    </div>
                </header>
                <main className="link-api-input__dialog-content">
                    <div className="row">
                        <div className="link-api-input__description col s12"
                            dangerouslySetInnerHTML={{ __html: item.dialogDescriptionHTML }}>
                        </div>
                    </div>
                    <Form
                        ref={e => formEl = e}
                        elements={item.formElements}
                        onSubmit={(e) => {
                            DP.hide();
                            res(e);
                        }}>
                        <div className="col s12">
                            <Button
                                className="button--full-width"
                                onClick={() => {formEl.submit}}
                            >
                                Connect
                            </Button>
                        </div>
                    </Form>
                </main>
            </DialogNormalLayout>
        )
    }, { className: "dialog--large" })

}