import React, { useContext, useMemo, useState } from "react";
function Provider(_a) {
    var children = _a.children, _state = _a.state;
    var _b = useState(_state.getState()), state = _b[0], setState = _b[1];
    _state.setUpdater(setState);
    _state.setMethods();
    var Context = useMemo(function () { return _state.getContext(); }, []);
    return React.createElement(Context.Provider, { value: state }, children);
}
function useBranchState(state) {
    var value = useContext(state.getContext());
    var methods = useMemo(function () { return state.getMethods(); }, []);
    return [value, methods];
}
export { Provider, useBranchState };
