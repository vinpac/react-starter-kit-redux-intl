import cx from 'classnames';
import React from 'react';
import { LOCALES } from '../../common/constants';
import IntlMessage from '../../components/elements/IntlMessage';
import { getCurrentLocale, getIntlMessage as __ } from '../../intl';

class HomeView extends React.Component {
  render() {
    return (
      <div className="view-home view-spacer">
        <div className="container">
          <h1>{__('app.name')}</h1>
          <IntlMessage
            className="text-muted mb-3"
            message="home.description"
            component="p"
          />
          <div className="form-group">
            <input type="text" className="input" />
          </div>
          <div className="list-blocks">
            {LOCALES.map(locale => {
              const isActive = locale === getCurrentLocale();
              return (
                <a
                  key={locale}
                  role="button"
                  href={`/set_locale/${locale}`}
                  className={cx('list-item', {
                    active: isActive,
                  })}
                >
                  {isActive &&
                    <i className="fa fa-check-circle mr-1" />
                  }
                  {__(`locales.${locale}`)}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default HomeView;
