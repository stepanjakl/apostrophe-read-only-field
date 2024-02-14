module.exports = {
    init(self) {
        self.addReadOnlyFieldType()
    },
    methods(self) {
        return {
            addReadOnlyFieldType() {
                self.apos.schema.addFieldType({
                    name: 'readOnly',
                    convert: self.convertInput,
                    vueComponent: 'InputReadOnly'
                })
            }
        }
    }
}
