class Enrollment {
    getbackContent = () => {
        let tableData = '';
        this.props.enrollmentPlan.globalContent[0].products.map(product => {
            product.comparePlanInfo.map(plan => {
                if (Object.keys(plan)[0] === 'PPO') tableData = plan['PPO'];
            });
        });
        // let locvalues = this.optionsLOC.map(loc => {
        //     return loc.isError === 'false' ? loc.value : null;
        // });
        let locvalues = [];
        let tabTrData = [];
        let tabHeader = [{
            header: tableData.header.headerSubTitle, // 'Employer Sponsored Dental',
            columns: [' ']
        }]
        let tamsVal = !isEmpty(this.state.currentTAMC) ? this.state.currentTAMC : this.props.plan;
        _.map(_.get(tableData, `data[${tamsVal}]`, {}), (value, key) => {
            if(!isEmpty(this.props.selectedPlan) && key === this.props.selectedPlan)
            {
            locvalues.push(key);
            tabHeader.push({
                header: `${key} Plan`,
                columns: [tableData.title.INNETWORK, tableData.title.OUTNETWORK]
            });
           }
           else if(isEmpty(this.props.selectedPlan)){
            locvalues.push(key);
            tabHeader.push({
                header: `${key} Plan`,
                columns: [tableData.title.INNETWORK, tableData.title.OUTNETWORK]
        });
           }
        });
        const tableRowData = _.get(
            tableData,
            `data.${tamsVal}`,
            {}
        );
        let index = 0;
        _.map(tableData.content, (value, key) => {
            let tabRowData =[];
            let multiTabRowData = [];
            let single={};
            single.header = _.map(value.split('\n'), (val, index) => {
                multiTabRowData[index] = [<td>{val}</td>]
                return <p>{val}</p>
            });
            tabRowData.push(<td>{single.header}</td>);
            const multiLength = multiTabRowData.length > 1;
            _.map(locvalues, (val) => {
                single[`${val}in`] = _.map(_.get(tableRowData, `${val}.${key}.INNETWORK`, '').split('\n'), (val, index) => {
                    multiLength && multiTabRowData[index].push(<td>{val}</td>);
                    return <p>{val}</p>
                });
                tabRowData.push(<td>{single[`${val}in`]}</td>);
                single[`${val}out`] = _.map(_.get(tableRowData, `${val}.${key}.OUTOFNETWORK`, '').split('\n'), (val, index) => {
                    multiLength && multiTabRowData[index].push(<td>{val}</td>);
                    return <p>{val}</p>
                });
                tabRowData.push(<td>{single[`${val}out`]}</td>);
            });
            multiLength ?  tabTrData.push(<div className='table-content'>{
                    _.map(multiTabRowData, (val) => {
                        return <tr className={`${index%2===0 ? 'even-row' : 'odd-row'}`}>{val}</tr>
                    })
                }</div>)
                : tabTrData.push(<tr className={`${index%2===0 ? 'even-row' : 'odd-row'}`}>{tabRowData}</tr>)
           index++;
        });
    
        let tabMainHeader = [];
        let tabSubHeader = [];
        _.map(tabHeader, (val) => {
    
            let length = val.columns.length;
            length = length!==0 ? length : 1
            tabMainHeader.push(
                <th colSpan={`${length}`}>{val.header}</th>)
    
                    _.map(val.columns, (value) => {
                        tabSubHeader.push (
                            <td>{value}</td>
                        )
                    })
        })
        var headerText = _.get(tableData, 'header.headerSubDescription', '').split("<br/>").map(function (texts, index) {
            return <div key={index}>{ texts }<br/></div>;
        });
    
        return (
            <div className="ppo-backcard-detailscontent">
                <div className="ppo-header">
                {(this.props.btndisplay !== true) &&<span className="ml-card-title">{tableData.header.headerTitle}</span>}
                    {(this.props.btndisplay !== true) &&<Link className="ml-flip-trigger" text={'BACK'} onClick={this.flipCard} testId="dental_ppo_back"/>}
                     <div className="horizontal_row"></div>
                    <div className="header-description">
                        {tableData.header.headerDescription} {'  '}
                        <Link className="learnmore" text="Learn More." url="https://metlife.com/EEMarketing/benefits/dental-ppo" target="_blank"  onClick={this.LearnmoreClick}/><br/>
                        {headerText}
                    </div>
                </div>
                <div className="innercontent">
                    <table>
                        <thead>
                            {tabMainHeader}
                        </thead>
                        <tbody>
                            <tr className="td-header">{tabSubHeader}</tr>
                            {tabTrData}
                        </tbody>
                    </table>
                    <div className="footer">
                        <p>{tableData.footer.footerDescription}</p>
                    </div>
                    {(this.props.btndisplay !== true) && <div className="backcardclose_btn">
                        <Button
                            text={tableData.footer.closeText}
                            onClick={this.flipCard}
                        />
                    </div>}
                </div>
            </div>
        );
    };
}
