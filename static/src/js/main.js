/** @odoo-module */

import { registry } from "@web/core/registry";
import { useSetupAction } from "@web/webclient/actions/action_hook";
import { useService } from "@web/core/utils/hooks";

const { Component, onWillStart, useState, useEffect } = owl;

export class OdooClientAction extends Component {
    constructor() {
        super(...arguments);
        this.state = useState({
            users: [],
        });
        console.log("\n\n ===========constructor==============")
    }
    setup() {
        console.log("\n\n ===========setup==============")
    }
    async willStart() {
        await this.loadUsers()
        console.log("\n\n ===========willStart==============")
        console.log("\n\n users: ", this.state.users)
    }
    async willUnmount() {
        await this.loadUsers()
        console.log("\n\n ===========willUnmount==============")
    }

    async loadUsers() {
        const self = this
        let users = await this.env.services.orm.searchRead('res.users', [], ['id', 'name', 'login'])
        users.map((user) => {
            self.addUser(user)
        })    
    }
    addUser(user) {
        this.state.users.push(user)
    }

    async button1(){
        console.log("\n\n ===========button1==============")

    }
    async button2(){
        console.log("\n\n ===========button2==============")

    }

}
OdooClientAction.template = "odoo_client_action.DashboardAction";

registry.category("actions").add("odoo_client_action", OdooClientAction);
